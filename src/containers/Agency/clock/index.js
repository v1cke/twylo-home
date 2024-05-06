import React, { useState, useEffect } from 'react'
import styles from './clock.module.css'

const ClockLetter
  = ({ children, iStyle }) => {
    return (
      <div className={styles.letter} style={{ '--i': iStyle }}>
        {children}
      </div>
    )
  }
const ClockBox = ({ children, jStyle, rotateX }) => {
  return (
    <div className={styles.box} style={{ '--j': jStyle, '--rotate': `${rotateX}deg` }}>
      {children}
    </div>
  )
}
const PointBox = ({ children }) => {
  return (
    <div className={styles.ponit} >
      {children}
    </div>
  )
}

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [rotateX, setRotateX] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setRotateX(prevRotateX => prevRotateX - 90);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const renderNumbers = (num) => {
    const digits = Number(num);
    return (
      <>
        <ClockLetter iStyle={0}>{(digits + 0) % 10}</ClockLetter>
        <ClockLetter iStyle={1}>{(digits + 1) % 10}</ClockLetter>
        <ClockLetter iStyle={2}>{(digits + 2) % 10}</ClockLetter>
        <ClockLetter iStyle={3}>{(digits + 3) % 10}</ClockLetter>
      </>
    );
  };

  const hoursChar1 = Number(hours[0]);
  const hoursChar2 = Number(hours[1]);
  const minutesChar1 = Number(minutes[0]);
  const minutesChar2 = Number(minutes[1]);
  const secondsChar1 = Number(seconds[0]);
  const secondsChar2 = Number(seconds[1]);

  return (
    // <div className={styles.container}>
    //   <ClockBox jStyle={0} >
    //     <ClockLetter iStyle={0}>{(hoursChar1 + 0) % 10}</ClockLetter>
    //     <ClockLetter iStyle={1}>{(hoursChar1 + 1) % 10}</ClockLetter>
    //     <ClockLetter iStyle={2}>{(hoursChar1 + 2) % 10}</ClockLetter>
    //     <ClockLetter iStyle={3}>{(hoursChar1 + 3) % 10}</ClockLetter>
    //   </ClockBox>
    //   <ClockBox jStyle={1} >
    //     <ClockLetter iStyle={0}>{(hoursChar2 + 0) % 10}</ClockLetter>
    //     <ClockLetter iStyle={1}>{(hoursChar2 + 1) % 10}</ClockLetter>
    //     <ClockLetter iStyle={2}>{(hoursChar2 + 2) % 10}</ClockLetter>
    //     <ClockLetter iStyle={3}>{(hoursChar2 + 3) % 10}</ClockLetter>
    //   </ClockBox>
    //   < PointBox >
    //     <ClockLetter iStyle={0}>:</ClockLetter>
    //     <ClockLetter iStyle={1}></ClockLetter>
    //     <ClockLetter iStyle={2}></ClockLetter>
    //     <ClockLetter iStyle={3}></ClockLetter>
    //   </PointBox >
    //   <ClockBox jStyle={2} >
    //     <ClockLetter iStyle={0}>{(minutesChar1 + 0) % 10}</ClockLetter>
    //     <ClockLetter iStyle={1}>{(minutesChar1 + 1) % 10}</ClockLetter>
    //     <ClockLetter iStyle={2}>{(minutesChar1 + 2) % 10}</ClockLetter>
    //     <ClockLetter iStyle={3}>{(minutesChar1 + 3) % 10}</ClockLetter>
    //   </ClockBox>
    //   <ClockBox jStyle={3} >
    //     <ClockLetter iStyle={0}>{(minutesChar2 + 0) % 10}</ClockLetter>
    //     <ClockLetter iStyle={1}>{(minutesChar2 + 1) % 10}</ClockLetter>
    //     <ClockLetter iStyle={2}>{(minutesChar2 + 2) % 10}</ClockLetter>
    //     <ClockLetter iStyle={3}>{(minutesChar2 + 3) % 10}</ClockLetter>
    //   </ClockBox>
    // </div>

    <div className={styles.container}>
      <ClockBox jStyle={0} rotateX={rotateX}>
        {renderNumbers(hours[0])}
      </ClockBox>
      <ClockBox jStyle={1} rotateX={rotateX}>
        {renderNumbers(hours[1])}
      </ClockBox>
      < PointBox >
        <ClockLetter iStyle={0}>:</ClockLetter>
        <ClockLetter iStyle={1}></ClockLetter>
        <ClockLetter iStyle={2}></ClockLetter>
        <ClockLetter iStyle={3}></ClockLetter>
      </PointBox >
      <ClockBox jStyle={2} rotateX={rotateX}>
        {renderNumbers(minutes[0])}
      </ClockBox>
      <ClockBox jStyle={3} rotateX={rotateX}>
        {renderNumbers(minutes[1])}
      </ClockBox>
    </div>

  )
}



export default Clock


