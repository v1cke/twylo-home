import React, { Fragment, useState, useEffect } from 'react'
import styles from './rain.module.css';

const Rain = () => {
    const [drops, setDrops] = useState([]);

    const randomText = () => {
        const text = "(!@#$%^&*()_-+<>[]{}10)";
        const randomIndex = Math.floor(Math.random() * text.length);
        return text[randomIndex];
    };

    useEffect(() => {
        const cloud = document.querySelector(`.${styles.cloud}`);

        const intervalId = setInterval(() => {
            const dropId = Math.random();
            const left = Math.floor(Math.random() * 290);
            const size = Math.random() * 1.5;
            const duration = Math.random() * 1;
            const newDrop = {
                id: dropId,
                left: left,
                size: size,
                duration: duration,
                char: randomText()
            };

            setDrops(currentDrops => [...currentDrops, newDrop]);

            setTimeout(() => {
                setDrops(currentDrops => currentDrops.filter(drop => drop.id !== dropId));
            }, 2000);
        }, 20);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className={styles.container}
        >
            <div className={styles.cloud} >
                <h2 className={styles.cloudText}>Code Rain</h2>
                {drops.map(drop => (
                    <div
                        key={drop.id}
                        className={styles.drop}
                        style={{
                            left: `${drop.left}px`,
                            fontSize: `${0.5 + drop.size}em`,
                            animationDuration: `${1 + drop.duration}s`
                        }}
                    >
                        {drop.char}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rain
