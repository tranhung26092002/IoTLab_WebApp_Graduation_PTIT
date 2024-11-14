import React from 'react';
import styles from "./DeviceControls.module.scss";

interface DeviceControlsProps {
    led: string;
    toggleLed: () => void;

}

const DeviceControls: React.FC<DeviceControlsProps> = ({
    led,
    toggleLed,

}) => {
    return (
        <div className={styles.container}>
            <h1>Device Controls</h1>
            <div className={styles.dashboard}>
                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>LED</h3>
                            <div className={styles.ledContent}>
                                <button id="toggleButton" onClick={toggleLed}>
                                    {led === 'off' ? 'Bật' : 'Tắt'}
                                </button>
                            </div>
                        </div>
                        <div
                            className={styles.icon}
                            style={{ color: led === 'off' ? 'green' : 'red' }}
                        >
                            <i className="fas fa-lightbulb"></i>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>LED</h3>
                            <div className={styles.ledContent}>
                                <button id="toggleButton" onClick={toggleLed}>
                                    {led === 'off' ? 'Bật' : 'Tắt'}
                                </button>
                            </div>
                        </div>
                        <div
                            className={styles.icon}
                            style={{ color: led === 'off' ? 'green' : 'red' }}
                        >
                            <i className="fas fa-lightbulb"></i>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>LED</h3>
                            <div className={styles.ledContent}>
                                <button id="toggleButton" onClick={toggleLed}>
                                    {led === 'off' ? 'Bật' : 'Tắt'}
                                </button>
                            </div>
                        </div>
                        <div
                            className={styles.icon}
                            style={{ color: led === 'off' ? 'green' : 'red' }}
                        >
                            <i className="fas fa-lightbulb"></i>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.insight_item}>
                        <div className={styles.content}>
                            <h3>LED</h3>
                            <div className={styles.ledContent}>
                                <button id="toggleButton" onClick={toggleLed}>
                                    {led === 'off' ? 'Bật' : 'Tắt'}
                                </button>
                            </div>
                        </div>
                        <div
                            className={styles.icon}
                            style={{ color: led === 'off' ? 'green' : 'red' }}
                        >
                            <i className="fas fa-lightbulb"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceControls;