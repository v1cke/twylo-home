// components/MouseTrail.tsx
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const MouseTrail = () => {
  const trailRef = useRef([])

  useEffect(() => {
    trailRef.current = trailRef.current.slice(0, 10)

    window.addEventListener('mousemove', (e) => {
      const x = e.clientX
      const y = e.clientY
      trailRef.current.forEach((dot, index) => {
        gsap.to(dot, {
          x,
          y,
          delay: index * 0.02, // Delay each dot to create a trail effect
          duration: 0.5,
        })
      })
    })
  }, [])

  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (trailRef.current[index] = el)}
          style={{
            zIndex: '999',
            position: 'fixed',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'green',
            pointerEvents: 'none',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        />
      ))}
    </>
  )
}

export default MouseTrail
