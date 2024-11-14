import React, { Fragment, useState } from "react";
import mqtt from "mqtt";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./OpenKitB.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MqttControls from "./MqttControls/MqttControls";
import Dashboard from "./Dashboard/Dashboard";
import DeviceControls from "./DeviceControls/DeviceControls";

const OpenKitB: React.FC = () => {
  // value
  const [temperature, setTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [gas, setGas] = useState<number>(0);
  const [light, setLight] = useState<number>(0);

  const [led, setLed] = useState<string>("off");

  // status
  const [connectionStatus, setConnectionStatus] =
    useState<string>("Disconnected");
  const [subscribeStatus, setSubscribeStatus] = useState<string>("");
  const [publishStatus, setPublishStatus] = useState<string>("");

  // chart
  const [temperatureHistory, setTemperatureHistory] = useState<number[]>([]);
  const [humidityHistory, setHumidityHistory] = useState<number[]>([]);
  const [gasHistory, setGasHistory] = useState<number[]>([]);
  const [lightHistory, setLightHistory] = useState<number[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);

  // MQTT configuration states
  const [client, setClient] = useState<mqtt.MqttClient | null>(null);

  const [mqttProtocol, setMqttProtocol] = useState("wss://");
  const [mqttHost, setMqttHost] = useState("openlab.com.vn");
  const [mqttPort, setMqttPort] = useState("8884");
  const [idKit, setIdKit] = useState("abc");
  const [mqttUser, setMqttUser] = useState("admin");
  const [mqttPassword, setMqttPassword] = useState("admin");
  const [mqttTopicPub, setMqttTopicPub] = useState("");
  const [mqttMessage, setMqttMessage] = useState("");
  const [mqttTopicSub, setMqttTopicSub] = useState("");
  const [subscribedData, setSubscribedData] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleConnect = () => {
    if (!mqttHost || !mqttPort || !idKit || !mqttUser || !mqttPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    setErrorMessage("");
    const clientId = `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
    const mqttClient = mqtt.connect(
      `${mqttProtocol}${mqttHost}:${mqttPort}/mqtt`,
      {
        clientId: clientId,
        username: mqttUser,
        password: mqttPassword,
      }
    );

    mqttClient.on("connect", () => {
      setConnectionStatus("Connected");
    });

    mqttClient.on("message", (topic, message) => {
      try {
        const data = JSON.parse(message.toString());
        setSubscribedData(JSON.stringify(data, null, 2));

        const temperatureValue = parseFloat(data.temperature).toFixed(2);
        const humidityValue = parseFloat(data.humidity).toFixed(2);
        const gasValue = parseFloat(data.gas).toFixed(2);
        const lightValue = parseFloat(data.light).toFixed(2);
        const ledValue = data.led || "off";

        setTemperature(parseFloat(temperatureValue));
        setHumidity(parseFloat(humidityValue));
        setGas(parseFloat(gasValue));
        setLight(parseFloat(lightValue));
        setLed(ledValue);

        updateTemperatureHistory(parseFloat(temperatureValue));
        updateHumidityHistory(parseFloat(humidityValue));
        updateGasHistory(parseFloat(gasValue));
        updateLightHistory(parseFloat(lightValue));

        const now = new Date().toLocaleTimeString();
        setTimestamps((prev) => [...prev, now]);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });

    mqttClient.on("error", (error) => {
      console.error("Connection error: ", error);
      setConnectionStatus("Disconnected");
    });

    setClient(mqttClient);
    setConnectionStatus("Connecting...");
    setErrorMessage("");
  };

  const handleDisconnect = () => {
    if (client) {
      client.end();
      setClient(null);
      setConnectionStatus("Disconnected");
    }
  };

  const handlePublish = () => {
    if (
      client &&
      connectionStatus === "Connected" &&
      mqttTopicPub &&
      mqttMessage
    ) {
      const message = JSON.stringify({ message: mqttMessage });
      client.publish(
        mqttTopicPub,
        message,
        { qos: 0, retain: false },
        (error) => {
          if (error) {
            console.error("Publish error: ", error);
            setPublishStatus("Publish Failed");
          } else {
            setPublishStatus("Publish Successful");
          }
        }
      );
    }
  };

  const handleSubscribe = () => {
    if (client && connectionStatus === "Connected" && mqttTopicSub) {
      client.subscribe(mqttTopicSub, { qos: 0 }, (error) => {
        if (error) {
          console.error("Subscribe error: ", error);
          setSubscribeStatus("Subscribe Failed");
        } else {
          setSubscribeStatus("Subscribe Successful");
        }
      });
    }
  };

  const handleUnsubscribe = () => {
    if (client && connectionStatus === "Connected" && mqttTopicSub) {
      client.unsubscribe(mqttTopicSub, (error) => {
        if (error) {
          console.error("Unsubscribe error: ", error);
        } else {
          setSubscribedData("");
          setSubscribeStatus("Unsubscribe Successful");
        }
      });
    }
  };

  const updateTemperatureHistory = (value: number) => {
    setTemperatureHistory((prev) => [...prev, value]);
  };

  const updateHumidityHistory = (value: number) => {
    setHumidityHistory((prev) => [...prev, value]);
  };

  const updateGasHistory = (value: number) => {
    setGasHistory((prev) => [...prev, value]);
  };

  const updateLightHistory = (value: number) => {
    setLightHistory((prev) => [...prev, value]);
  };

  const toggleLed = () => {
    if (client && connectionStatus === "Connected") {
      const newLedState = led === "off" ? 1 : 0;
      client.publish("client", JSON.stringify({ led: newLedState }));
      setLed(newLedState === 1 ? "on" : "off");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.content_container}>
            <div className={styles.header_content}>
              <h1>OpenKIT-B</h1>
            </div>
            <div className={styles.connection_status}>
              <h3>
                Connection Status:{" "}
                <span className={styles.status}>{connectionStatus}</span>
              </h3>
            </div>
          </div>
          <Tabs>
            <TabList>
              <Tab>MQTT Controls</Tab>
              <Tab>Dashboard</Tab>
              <Tab>Device Controls</Tab>
            </TabList>

            <TabPanel>
              <MqttControls
                idKit={idKit}
                setIdKit={setIdKit}
                mqttProtocol={mqttProtocol}
                setMqttProtocol={setMqttProtocol}
                mqttHost={mqttHost}
                setMqttHost={setMqttHost}
                mqttPort={mqttPort}
                setMqttPort={setMqttPort}
                mqttUser={mqttUser}
                setMqttUser={setMqttUser}
                mqttPassword={mqttPassword}
                setMqttPassword={setMqttPassword}
                errorMessage={errorMessage}
                mqttTopicSub={mqttTopicSub}
                setMqttTopicSub={setMqttTopicSub}
                subscribedData={subscribedData}
                handleConnect={handleConnect}
                handleDisconnect={handleDisconnect}
                handleSubscribe={handleSubscribe}
                handleUnsubscribe={handleUnsubscribe}
                subscribeStatus={subscribeStatus}
                mqttTopicPub={mqttTopicPub}
                setMqttTopicPub={setMqttTopicPub}
                mqttMessage={mqttMessage}
                setMqttMessage={setMqttMessage}
                handlePublish={handlePublish}
                publishStatus={publishStatus}
              />
            </TabPanel>
            <TabPanel>
              <Dashboard
                temperature={temperature}
                humidity={humidity}
                gas={gas}
                light={light}
                timestamps={timestamps}
                temperatureHistory={temperatureHistory}
                humidityHistory={humidityHistory}
                gasHistory={gasHistory}
                lightHistory={lightHistory}
              />
            </TabPanel>
            <TabPanel>
              <DeviceControls led={led} toggleLed={toggleLed} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default OpenKitB;
