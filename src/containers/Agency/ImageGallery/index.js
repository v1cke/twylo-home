import React, { useState, useEffect } from 'react'
import styles from './imageGallery.module.css'

const ImageCard = ({ img, iStyle, alt }) => {
  return (
    <span className={styles.spanImg} style={{ '--i': iStyle }} >
      <img src={img} alt={alt} />
    </span>
  )
}

const ImageGallery = () => {
  const [angle, setAngle] = useState(0)
  const [timerId, setTimerId] = useState(null)

  const startAutoRotate = () => {
    stopAutoRotate()
    const id = setInterval(() => {
      setAngle((prevAngle) => prevAngle - 45)
    }, 5000)
    setTimerId(id)
  }

  const stopAutoRotate = () => {
    if (timerId) clearInterval(timerId)
  }

  const rotatePrev = () => {
    setAngle((prevAngle) => prevAngle + 45)
    startAutoRotate()
  }

  const rotateNext = () => {
    setAngle((prevAngle) => prevAngle - 45)
    startAutoRotate()
  }

  useEffect(() => {
    startAutoRotate()
    return () => stopAutoRotate()
  }, [])

  return (
    <div className={styles.outsideContainer}>
      <div className={styles.container}>
        <div
          className={styles.box}
          style={{ transform: `perspective(1000px) rotateY(${angle}deg)` }}
        >
          <ImageCard img="/images/wee_start.png" iStyle={1} alt='start' />
          <ImageCard img="/images/tr_schicht.png" iStyle={2} alt='schicht' />
          <ImageCard img="/images/tr_dienstplan.png" iStyle={3} alt='dienstplan' />
          <ImageCard img="/images/wee_karriere.png" iStyle={4} alt='karriere' />
          <ImageCard img="/images/traincrew2.png" iStyle={5} alt='traincrew2' />
          <ImageCard img="/images/tr_wee.png" iStyle={6} alt='wee' />
          <ImageCard img="/images/traincrew.png" iStyle={7} alt='traincrew' />
          <ImageCard img="/images/tr_ticket.png" iStyle={8} alt='ticket' />
        </div>
        <div className={styles.btns}>
          <div
            className={`${styles.btn} ${styles.prev}`}
            onClick={rotatePrev}
          ></div>
          <div
            className={`${styles.btn} ${styles.next}`}
            onClick={rotateNext}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
