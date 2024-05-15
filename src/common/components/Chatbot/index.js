// import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import styles from './chatBot.module.css'
import axios from 'axios'
import Button55 from '../Button55'
import Slide from 'react-reveal/Slide'

export const ChatBot = () => {
  const inputRef = useRef(null)
  const messageArea = useRef(null)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    'Hallo, mein Name ist Twyli. Wie kann ich Ihnen heute helfen?',
  ])
  const [openChat, setOpenChat] = useState(false)
  const [previewChat, setPreviewChat] = useState(false)
  const [previewSet, setPreviewSet] = useState(false)
  const [loading, setLoading] = useState(false)

  const scrollToBottom = () => {
    if (messageArea.current) {
      messageArea.current.scrollTop = messageArea.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (!previewSet) {
      const timer1 = setTimeout(() => {
        if (!openChat) {
          setPreviewChat(true)
          setPreviewSet(true)
        }
      }, 10000)

      return () => clearTimeout(timer1)
    }
  }, [openChat, previewSet])

  useEffect(() => {
    if (openChat) {
      inputRef.current.focus()
    }
  }, [openChat])

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
          <div className={styles.chatBotMessages} ref={messageArea}>
            {messages.map((msg, index) => {
              const isUserMsg = msg.startsWith('user')
              const position = msg.indexOf(':')

              return (
                <div
                  key={index}
                  className={styles.messagesWrapper}
                  style={{
                    flexDirection: isUserMsg ? 'row-reverse' : 'row',
                  }}
                  key={index}
                >
                  {/* <IconWrapper></IconWrapper> */}
                  <img
                    src={
                      isUserMsg
                        ? 'images/User-Avatar.png'
                        : 'images/Twyli-avatar.png'
                    }
                    height={'40px'}
                    width={'40px'}
                  />
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
            <input ref={inputRef} value={input} onChange={handleInputChange} />
            <button disabled={input === ''} type="submit">
              {loading ? '...Denken' : 'Senden'}
            </button>
          </form>
        </div>
      )}
      {previewChat && (
        <div
          className={styles.previewChatBotContainer}
          onClick={() => {
            setPreviewChat(false)
            setPreviewSet(true)
            setOpenChat(!openChat)
          }}
        >
          <div className={styles.previewChatBotMessages}>
            <div className={styles.messagesWrapper}>
              <img
                src="images/Twyli-avatar.png"
                height={'40px'}
                width={'40px'}
              />
              <p
                style={{
                  textAlign: 'left',
                  paddingLeft: '0px',
                  paddingRight: '50px',
                }}
              >
                Hallo, mein Name ist Twyli. Wie kann ich Ihnen heute helfen?
              </p>
            </div>
          </div>
        </div>
      )}
      <Button55
        className={styles.bubbleBottom}
        style={{ paddingLeft: openChat ? '12px' : '8px' }}
        onClick={() => {
          setOpenChat(!openChat)
        }}
      >
        {openChat ? (
          <img src="images/X-avatar.png" height={'40px'} width={'40px'} />
        ) : (
          <>
            <img src="images/Twyli-avatar.png" height={'40px'} width={'40px'} />
            Frag mich
          </>
        )}
      </Button55>
    </>
  )
}
