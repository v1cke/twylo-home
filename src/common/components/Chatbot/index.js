// import axios from 'axios'
import React, { useState } from 'react'
import styles from './chatBot.module.css'
import axios from 'axios'
import Button55 from '../Button55'

export const ChatBot = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    'Hallo, mein Name ist Twyli. Wie kann ich Ihnen heute helfen?',
  ])
  const [openChat, setOpenChat] = useState(false)
  console.log('ChatBot  openChat', openChat)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userMessage = input
    setInput('')
    setMessages((prev) => [...prev, `user: ${userMessage}`])

    try {
      const response = await axios.post('/api/chatbot', { userMessage })
      if (response) {
        setMessages((prev) => [...prev, `bot: ${response.data}`])
      }
    } catch (error) {
      console.error('Error fetching chat response:', error)
    }
  }

  return (
    <>
      {openChat ?? (
        <div className={styles.chatBotContainer}>
          <div className={styles.chatBotMessages}>
            {messages.map((msg, index) => {
              const isUserMsg = msg.startsWith('user')
              const position = msg.indexOf(':')

              return (
                <div style={{ display: 'flex' }}>
                  {/* <IconWrapper></IconWrapper> */}
                  <img src="logo.png" height={'30px'} width={'30px'} />
                  <p
                    style={{
                      textAlign: isUserMsg ? 'right' : 'left',
                      paddingLeft: isUserMsg ? '40px' : '0px',
                      paddingRight: isUserMsg ? '0px' : '40px',
                    }}
                    key={index}
                  >
                    {msg.substring(position + 1)}
                  </p>
                </div>
              )
            })}
          </div>

          <form onSubmit={handleSubmit} className={styles.chatBotInput}>
            <input value={input} onChange={handleInputChange} />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <Button55
        className={styles.bubbleBottom}
        onClick={() => {
          openChat ? setOpenChat(false) : setOpenChat(true)
        }}
      >
        Frag mich
      </Button55>
    </>
  )
}
