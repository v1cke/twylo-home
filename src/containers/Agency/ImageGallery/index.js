import React, { Fragment, useState, useEffect } from 'react'
import styles from './imageGallery.module.css'

const ImageCard = ({ img, iStyle }) => {
  return (
    <span className={styles.spanImg} style={{ '--i': iStyle }}>
      <img src={img} />
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
          <ImageCard img="/images/wee.png" iStyle={1} />
          <ImageCard img="/images/traincrew.png" iStyle={2} />
          <ImageCard img="/images/twylorail.png" iStyle={3} />
          <ImageCard img="/images/wee2.png" iStyle={4} />
          <ImageCard img="/images/traincrew2.png" iStyle={5} />
          <ImageCard img="/images/wee.png" iStyle={6} />
          <ImageCard img="/images/traincrew.png" iStyle={7} />
          <ImageCard img="/images/twylorail3.png" iStyle={8} />
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
