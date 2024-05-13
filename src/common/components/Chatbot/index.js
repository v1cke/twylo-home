// import axios from 'axios'
import React, { useState } from 'react'
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
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
