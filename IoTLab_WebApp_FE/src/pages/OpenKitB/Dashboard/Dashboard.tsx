import React from 'react';
import Plot from 'react-plotly.js';
import styles from "./Dashboard.module.scss";

interface DashboardProps {
    temperature: number;
    humidity: number;
    gas: number;
    light: number;
    timestamps: string[];
    temperatureHistory: number[];
    humidityHistory: number[];
    gasHistory: number[];
    lightHistory: number[];
}

const Dashboard: React.FC<DashboardProps> = ({
    temperature,
    humidity,
    gas,
    light,
    timestamps,
    temperatureHistory,
    humidityHistory,
    gasHistory,
    lightHistory
}) => {
    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <div className={styles.dashboard}>
                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>Temperature</h3>
                            <h1>{temperature.toFixed(2)}°C</h1>
                        </div>
                        <div className={styles.icon} style={{ color: 'red' }}>
                            <i className="fas fa-thermometer-half"></i>
                        </div>
                    </div>

                    <div className={styles.chart_item}>
                        <Plot
                            data={[
                                {
                                    x: timestamps,
                                    y: temperatureHistory,
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: { color: '#05AD86' },
                                },
                            ]}
                            layout={{ title: 'Temperature History', yaxis: { range: [0, Math.max(...temperatureHistory, 10)] } }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>

                    <div className={styles.gauge_item}>
                        <Plot
                            data={[
                                {
                                    type: 'indicator',
                                    mode: 'gauge+number',
                                    value: temperature,
                                    gauge: {
                                        axis: { range: [0, 100] },
                                        steps: [
                                            { range: [0, 20], color: 'lightgray' },
                                            { range: [20, 40], color: 'lightblue' },
                                            { range: [40, 100], color: 'blue' },
                                        ],
                                        threshold: {
                                            line: { color: 'red', width: 4 },
                                            thickness: 0.75,
                                            value: 30,
                                        },
                                    },
                                },
                            ]}
                            layout={{ title: 'Temperature Gauge' }}
                            style={{ width: '300px', height: '250px' }}
                        />
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>Humidity</h3>
                            <h1>{humidity.toFixed(2)}%</h1>
                        </div>
                        <div className={styles.icon} style={{ color: 'blue' }}>
                            <i className="fas fa-tint"></i>
                        </div>
                    </div>

                    <div className={styles.chart_item}>
                        <Plot
                            data={[
                                {
                                    x: timestamps,
                                    y: humidityHistory,
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: { color: '#05AD86' },
                                },
                            ]}
                            layout={{ title: 'Humidity History', yaxis: { range: [0, Math.max(...humidityHistory, 10)] } }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>

                    <div className={styles.gauge_item}>
                        <Plot
                            data={[
                                {
                                    type: 'indicator',
                                    mode: 'gauge+number',
                                    value: humidity,
                                    gauge: {
                                        axis: { range: [0, 100] },
                                        steps: [
                                            { range: [0, 40], color: 'lightgray' },
                                            { range: [40, 80], color: 'lightblue' },
                                            { range: [80, 100], color: 'blue' },
                                        ],
                                        threshold: {
                                            line: { color: 'red', width: 4 },
                                            thickness: 0.75,
                                            value: 80,
                                        },
                                    },
                                },
                            ]}
                            layout={{ title: 'Humidity Gauge' }}
                            style={{ width: '300px', height: '250px' }}
                        />
                    </div>
                </div>
                
                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>Gas</h3>
                            <h1>{gas.toFixed(2)} ppm</h1>
                        </div>
                        <div className={styles.icon} style={{ color: 'brown' }}>
                            <i className="fas fa-gas-pump"></i>
                        </div>
                    </div>

                    <div className={styles.chart_item}>
                        <Plot
                            data={[
                                {
                                    x: timestamps,
                                    y: gasHistory,
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: { color: '#05AD86' },
                                },
                            ]}
                            layout={{ title: 'Gas History', yaxis: { range: [0, Math.max(...gasHistory, 10)] } }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>

                    <div className={styles.gauge_item}>
                        <Plot
                            data={[
                                {
                                    type: 'indicator',
                                    mode: 'gauge+number',
                                    value: gas,
                                    gauge: {
                                        axis: { range: [0, 900] },
                                        steps: [
                                            { range: [0, 300], color: 'lightgray' },
                                            { range: [300, 600], color: 'lightblue' },
                                            { range: [600, 1024], color: 'blue' },
                                        ],
                                        threshold: {
                                            line: { color: 'red', width: 4 },
                                            thickness: 0.75,
                                            value: 500,
                                        },
                                    },
                                },
                            ]}
                            layout={{ title: 'Gas Gauge' }}
                            style={{ width: '300px', height: '250px' }}
                        />
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>Light</h3>
                            <h1>{light.toFixed(2)} ppm</h1>
                        </div>
                        <div className={styles.icon} style={{ color: 'orange' }}>
                            <i className="fa-regular fa-sun"></i>
                        </div>
                    </div>

                    <div className={styles.chart_item}>
                        <Plot
                            data={[
                                {
                                    x: timestamps,
                                    y: lightHistory,
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: { color: '#05AD86' },
                                },
                            ]}
                            layout={{ title: 'Light History', yaxis: { range: [0, Math.max(...lightHistory, 10)] } }}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>

                    <div className={styles.gauge_item}>
                        <Plot
                            data={[
                                {
                                    type: 'indicator',
                                    mode: 'gauge+number',
                                    value: light,
                                    gauge: {
                                        axis: { range: [0, 1024] },
                                        steps: [
                                            { range: [0, 300], color: 'lightgray' },
                                            { range: [300, 600], color: 'lightblue' },
                                            { range: [600, 1024], color: 'blue' },
                                        ],
                                        threshold: {
                                            line: { color: 'red', width: 4 },
                                            thickness: 0.75,
                                            value: 300,
                                        },
                                    },
                                },
                            ]}
                            layout={{ title: 'Light Gauge' }}
                            style={{ width: '300px', height: '250px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;