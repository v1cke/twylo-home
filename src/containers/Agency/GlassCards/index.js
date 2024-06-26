import React, { Fragment, useState, useEffect } from 'react'
import styles from './glassCards.module.css'

const GlassCard = ({ children, rStyle }) => {
  return (
    <div className={styles.glass} style={{ '--r': rStyle }}>
      {children}
    </div>
  )
}

const GlassCards = () => {
  return (
    <div className={styles.container}>
      <GlassCard rStyle={-15}>
        <span>
          <b>20</b> <br />
          <p>Jahre IT-Erfahrung</p>
        </span>
      </GlassCard>
      <GlassCard rStyle={5}>
        <span>
          <b>15</b>
          <br />
          <p>Glückliche Kunden</p>
        </span>
      </GlassCard>
      <GlassCard rStyle={25}>
        <span>
          <b>50+</b> <br />
          <p>Cloud-Telefonie Endpunkte</p>
        </span>
      </GlassCard>
      <GlassCard rStyle={-15}>
        <span>
          <b>&</b> <br />
          <p>vieles mehr</p>
        </span>
      </GlassCard>
    </div>
  )
}

export default GlassCards
