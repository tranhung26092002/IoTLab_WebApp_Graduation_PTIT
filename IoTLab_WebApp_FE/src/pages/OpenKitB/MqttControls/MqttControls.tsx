import React from "react";
import styles from "./MqttControls.module.scss";

const MqttControls: React.FC<{
  idKit: string;
  setIdKit: (value: string) => void;
  mqttProtocol: string;
  setMqttProtocol: (value: string) => void;
  mqttHost: string;
  setMqttHost: (value: string) => void;
  mqttPort: string;
  setMqttPort: (value: string) => void;
  mqttUser: string;
  setMqttUser: (value: string) => void;
  mqttPassword: string;
  setMqttPassword: (value: string) => void;
  errorMessage: string;
  mqttTopicSub: string;
  setMqttTopicSub: (value: string) => void;
  subscribedData: string;
  handleConnect: () => void;
  handleDisconnect: () => void;
  handleSubscribe: () => void;
  handleUnsubscribe: () => void;
  subscribeStatus: string;
  mqttTopicPub: string;
  setMqttTopicPub: (value: string) => void;
  mqttMessage: string;
  setMqttMessage: (value: string) => void;
  handlePublish: () => void;
  publishStatus: string;
}> = ({
  idKit,
  setIdKit,
  mqttProtocol,
  setMqttProtocol,
  mqttHost,
  setMqttHost,
  mqttPort,
  setMqttPort,
  mqttUser,
  setMqttUser,
  mqttPassword,
  setMqttPassword,
  errorMessage,
  mqttTopicSub,
  setMqttTopicSub,
  subscribedData,
  handleConnect,
  handleDisconnect,
  handleSubscribe,
  handleUnsubscribe,
  subscribeStatus,
  mqttTopicPub,
  setMqttTopicPub,
  mqttMessage,
  setMqttMessage,
  handlePublish,
  publishStatus,
}) => (
  <div className={styles.mqtt_controls}>
    <h2>MQTT Controls</h2>
    <div className={styles.mqtt_form}>
      <div className={styles.connect_mqtt}>
        <label>
          ID-KIT:
          <input
            type="text"
            value={idKit}
            onChange={(e) => setIdKit(e.target.value)}
            placeholder="Enter ID-Kit"
          />
        </label>

        <label>
          Protocol:
          <select
            value={mqttProtocol}
            onChange={(e) => setMqttProtocol(e.target.value)}
            className={styles.select}
          >
            <option value="mqtt://">mqtt://</option>
            <option value="mqtts://">mqtts://</option>
            <option value="ws://">ws://</option>
            <option value="wss://">wss://</option>
          </select>
        </label>

        <label>
          Host:
          <input
            type="text"
            value={mqttHost}
            onChange={(e) => setMqttHost(e.target.value)}
            placeholder="Enter host address"
          />
        </label>
        <label>
          Port:
          <input
            type="text"
            value={mqttPort}
            onChange={(e) => setMqttPort(e.target.value)}
            placeholder="Enter port"
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={mqttUser}
            onChange={(e) => setMqttUser(e.target.value)}
            placeholder="Enter username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={mqttPassword}
            onChange={(e) => setMqttPassword(e.target.value)}
            placeholder="Enter password"
          />
        </label>
        <div className={styles.connect_buttons}>
          <button onClick={handleConnect}>Connect</button>
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>

      <div className={styles.subscribe_mqtt}>
        <label>
          Subscribe Topic:
          <input
            type="text"
            value={mqttTopicSub}
            onChange={(e) => setMqttTopicSub(e.target.value)}
            placeholder="Enter topic"
          />
        </label>
        <div className={styles.subscribed_data}>
          <h3>Subscribed Data</h3>
          <textarea name="message" readOnly value={subscribedData} />
        </div>
        <div className={styles.subscribe_buttons}>
          <button onClick={handleSubscribe}>Subscribe</button>
          <button onClick={handleUnsubscribe}>Unsubscribe</button>
        </div>
        <div className={styles.subscribe_status}>
          <p>{subscribeStatus}</p>
        </div>
      </div>
      <div className={styles.publish_mqtt}>
        <label>
          Publish Topic:
          <input
            type="text"
            value={mqttTopicPub}
            onChange={(e) => setMqttTopicPub(e.target.value)}
            placeholder="Enter topic"
          />
        </label>

        <label>
          Message:
          <input
            type="text"
            value={mqttMessage}
            onChange={(e) => setMqttMessage(e.target.value)}
            placeholder="Enter message"
          />
        </label>
        <button onClick={handlePublish}>Publish</button>
        <div className={styles.publish_status}>
          <p>{publishStatus}</p>
        </div>
      </div>
    </div>
  </div>
);

export default MqttControls;
