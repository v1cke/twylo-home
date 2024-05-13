// import axios from 'axios'
import React, { useState } from 'react'
import styles from './chatBot.module.css';
import axios from 'axios'

export const ChatBot = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userMessage = input
    setMessages((prev) => [...prev, `Du: ${userMessage}`])

    try {
      const response = await axios.post('/api/chatbot', { userMessage })
      if (response) {
        setMessages((prev) => [...prev, `Bot: ${response.data}`])
      }
    } catch (error) {
      console.error('Error fetching chat response:', error)
    }

    setInput('')
  }

  return (
    <div className={styles.chatBotContainer} >
      <div className={styles.chatBotClose}>X</div>
      <div className={styles.chatBotMessages} >
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.chatBotInput}>
        <input value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
