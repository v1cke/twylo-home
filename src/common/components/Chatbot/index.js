// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from './chatBot.module.css'
import axios from 'axios'
import Button55 from '../Button55'
import Slide from 'react-reveal/Slide'

export const ChatBot = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    'Hallo, mein Name ist Twyli. Wie kann ich Ihnen heute helfen?',
  ])
  const [openChat, setOpenChat] = useState(true)
  const [loading, setLoading] = useState(false)


  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    setLoading(true)
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
    setLoading(false)
  }



  return (
    <>
      {openChat && (
        <div className={styles.chatBotContainer}>
          <div className={styles.chatBotMessages}>
            {messages.map((msg, index) => {
              const isUserMsg = msg.startsWith('user')
              const position = msg.indexOf(':')

              return (
                <div className={styles.messagesWrapper}
                  style={{
                    flexDirection: isUserMsg ? 'row-reverse' : 'row',

                  }}
                >
                  {/* <IconWrapper></IconWrapper> */}
                  <img src={isUserMsg ? "images/User-Avatar.png" : "images/Twyli-avatar.png"} height={'40px'} width={'40px'} />
                  <p
                    style={{
                      textAlign: isUserMsg ? 'right' : 'left',
                      paddingLeft: isUserMsg ? '50px' : '0px',
                      paddingRight: isUserMsg ? '0px' : '50px',
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
            <button type="submit">{loading ? '...Denken' : 'Senden'}</button>
          </form>
        </div>
      )}
      <Button55
        className={styles.bubbleBottom}
        onClick={() => {
          setOpenChat(!openChat);
        }}
      >
        Frag mich
      </Button55>
    </>
  )
}
