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
const ClockBox = ({ children, jStyle, }) => {
  return (
    <div className={styles.box} style={{ '--j': jStyle }}>
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



  return (
    <div className={styles.container}>
      <ClockBox jStyle={0} >
        <ClockLetter iStyle={0}>1</ClockLetter>
        <ClockLetter iStyle={1}>2</ClockLetter>
        <ClockLetter iStyle={2}>3</ClockLetter>
        <ClockLetter iStyle={3}>4</ClockLetter>
      </ClockBox>
      <ClockBox jStyle={1} >
        <ClockLetter iStyle={0}>1</ClockLetter>
        <ClockLetter iStyle={1}>2</ClockLetter>
        <ClockLetter iStyle={2}>3</ClockLetter>
        <ClockLetter iStyle={3}>4</ClockLetter>
      </ClockBox>
      < PointBox >
        <ClockLetter iStyle={0}>:</ClockLetter>
        <ClockLetter iStyle={1}></ClockLetter>
        <ClockLetter iStyle={2}></ClockLetter>
        <ClockLetter iStyle={3}></ClockLetter>
      </PointBox >
      <ClockBox jStyle={2} >
        <ClockLetter iStyle={0}>1</ClockLetter>
        <ClockLetter iStyle={1}>2</ClockLetter>
        <ClockLetter iStyle={2}>3</ClockLetter>
        <ClockLetter iStyle={3}>4</ClockLetter>
      </ClockBox>
      <ClockBox jStyle={3} >
        <ClockLetter iStyle={0}>1</ClockLetter>
        <ClockLetter iStyle={1}>2</ClockLetter>
        <ClockLetter iStyle={2}>3</ClockLetter>
        <ClockLetter iStyle={3}>4</ClockLetter>
      </ClockBox>
    </div>
  )
}



export default Clock


