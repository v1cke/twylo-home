// import OpenAI from 'openai'
import Groq from 'groq-sdk'
import dotenv from 'dotenv'

dotenv.config()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userMessage = req.body.userMessage

    // const openai = new OpenAI({
    //   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    // })

    const groq = new Groq({
      apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
    })

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              'Dein Name ist Twyli!, du sprichst Deutsch! und bist ein hilfsbereiter Assistent, erfinde nichts, halte dich an den context!',
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        model: 'llama3-8b-8192',
        max_tokens: 150,
      })

      res
        .status(200)
        .json(chatCompletion.choices.at(0)?.message?.content?.trim())
    } catch (error) {
      console.error(error)
      res.status(500).json('Fehler bei der Verarbeitung der Anfrage')
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
