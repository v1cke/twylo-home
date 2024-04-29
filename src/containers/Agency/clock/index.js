import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  })
  const [animate, setAnimate] = useState({
    hours: false,
    minutes: false,
    seconds: false,
  })

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date()
      const newHours = now.getHours()
      const newMinutes = now.getMinutes()
      const newSeconds = now.getSeconds()

      // Set animation trigger based on value changes
      setAnimate({
        hours: newHours !== time.hours,
        minutes: newMinutes !== time.minutes,
        seconds: newSeconds !== time.seconds,
      })

      setTime({
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      })
    }, 1000)

    return () => clearInterval(timerId)
  }, [time])

  const cubeStyle = (value, angle, shouldAnimate) => ({
    width: '50px',
    height: '50px',
    backgroundColor: '#333',
    color: '#0092CA',
    textAlign: 'center',
    lineHeight: '50px',
    fontSize: '20px',
    margin: '5px',
    display: 'inline-block',
    transform: `rotateY(${angle}deg)`,
    transition: shouldAnimate ? 'transform 0.7s ease-in-out' : 'none',
    transformStyle: 'preserve-3d',
  })

  return (
    <div id="clock" style={{ perspective: '1000px' }}>
      <Cube value={time.hours} animate={animate.hours} />
      <Cube value={time.minutes} animate={animate.minutes} />
      <Cube value={time.seconds} animate={animate.seconds} />
    </div>
  )
}

const Cube = ({ value, animate }) => {
  // Hier wird die Logik zum Drehen des Würfels eingefügt
  const sideStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    borderRadius: '4px',
  }

  return (
    <div
      className={`cube ${animate ? 'animate' : ''}`}
      style={{
        position: 'relative',
        width: '50px',
        height: '50px',
        transformStyle: 'preserve-3d',
        margin: '5px',
      }}
    >
      <div className="cube__face front" style={sideStyle}>
        {value < 10 ? `0${value}` : value}
      </div>
      <div
        className="cube__face back"
        style={{ ...sideStyle, transform: 'rotateY(180deg)' }}
      >
        {value < 10 ? `0${value}` : value}
      </div>
    </div>
  )
}

export default Clock

// style={{ position: 'absolute', top: '100px', right: '100px' }}
