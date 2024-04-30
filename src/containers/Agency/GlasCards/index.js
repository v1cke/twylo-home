import React, { Fragment, useState, useEffect } from 'react'
import styles from './glasCards.module.css'

const GlassCard = ({ text }) => {
  return (
    <div className={styles.glass} style={{ '--r': 1 }}>
      {text}
    </div> // Du kannst den Stil und Variablen wie `--r` nach Bedarf anpassen
  )
}

const GlasCards = () => {
  return (
    <div className="container">
      <GlassCard text="Design" />
      <GlassCard text="Code" />
      <GlassCard text="Launch" />
    </div>
  )
}

export default GlasCards
