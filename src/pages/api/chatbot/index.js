// import { Ollama } from '@langchain/community/llms/ollama'
// import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
// import { RetrievalQAChain } from 'langchain/chains'
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
// import { MemoryVectorStore } from 'langchain/vectorstores/memory'
// import '@tensorflow/tfjs-node'
// import { TensorFlowEmbeddings } from '@langchain/community/embeddings/tensorflow'
// import dotenv from 'dotenv'

// dotenv.config()

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const userMessage = req.body.userMessage
//     try {
//       const ollama = new Ollama({
//         baseUrl: 'http://localhost:11434',
//         model: 'llama3',
//       })

//       const loader = new CheerioWebBaseLoader('https://wee.gmbh')
//       const data = await loader.load()

//       // Split text into chunks
//       const textSplitter = new RecursiveCharacterTextSplitter({
//         chunkSize: 1024,
//         chunkOverlap: 50,
//       })
//       const splitDocs = await textSplitter.splitDocuments(data)

//       // TensorFlow Embedding to store these chunks in the datastore
//       const vectorStore = await MemoryVectorStore.fromDocuments(
//         splitDocs,
//         new TensorFlowEmbeddings(),
//       )
//       const retriever = vectorStore.asRetriever()
//       const chain = RetrievalQAChain.fromLLM(ollama, retriever)
//       const result = await chain.call({
//         query: userMessage,
//       })

//       res.status(200).json(result.text)
//     } catch (error) {
//       console.error(error)
//       res.status(500).json('Fehler bei der Verarbeitung der Anfrage')
//     }
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

import Groq from 'groq-sdk'
import dotenv from 'dotenv'
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
import { RetrievalQAChain } from 'langchain/chains'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import '@tensorflow/tfjs-node'
import { TensorFlowEmbeddings } from '@langchain/community/embeddings/tensorflow'
import fs from 'fs'
import path from 'path'

dotenv.config()

// Pfad zur Datei, in der die Vektoren gespeichert werden
const VECTOR_STORE_PATH = path.join(__dirname, 'chatbot', 'vectorstore.json')

// Funktion zum Speichern des Vektorstores in einer Datei
const saveVectorStore = async (vectorStore) => {
  // Sicherstellen, dass der Ordner existiert
  const dir = path.dirname(VECTOR_STORE_PATH)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  const data = JSON.stringify(vectorStore)
  fs.writeFileSync(VECTOR_STORE_PATH, data)
}

// Funktion zum Laden des Vektorstores aus einer Datei
const loadVectorStore = async () => {
  if (fs.existsSync(VECTOR_STORE_PATH)) {
    const data = fs.readFileSync(VECTOR_STORE_PATH)
    const jsonData = JSON.parse(data)

    // Manuelles Erstellen des Vektorstores aus JSON-Daten
    const embeddings = new TensorFlowEmbeddings()
    const vectorStore = new MemoryVectorStore(embeddings)
    vectorStore.embeddings = embeddings
    vectorStore.documents = jsonData.documents
    return vectorStore
  }
  return null
}

// Initialisiere den Vektorstore und lade ggf. gespeicherte Vektoren
const initializeVectorStore = async () => {
  let vectorStore = await loadVectorStore()
  if (!vectorStore) {
    const loader = new CheerioWebBaseLoader('https://wee.gmbh')
    const data = await loader.load()

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1024,
      chunkOverlap: 50,
    })
    const splitDocs = await textSplitter.splitDocuments(data)

    const embeddings = new TensorFlowEmbeddings()

    vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings)
    await saveVectorStore(vectorStore)
  }
  return vectorStore
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userMessage = req.body.userMessage
    try {
      const groq = new Groq({
        apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
      })

      const vectorStore = await initializeVectorStore()

      const retriever = vectorStore.asRetriever()

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `Dein Name ist Twyli!, du sprichst Deutsch! Du bist ein Chatbot der Firma Twylo. Du bist ein hilfsbereiter Assistent und versuchst, Kunden dabei zu helfen, sich auf der Website zurechtzufinden. Erfinde nichts, halte dich an den context!: ${retriever}}`,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        model: 'llama3-8b-8192',
        max_tokens: 300,
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

// import { Ollama } from '@langchain/community/llms/ollama'
// import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
// import { RetrievalQAChain } from 'langchain/chains'
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
// import { MemoryVectorStore } from 'langchain/vectorstores/memory'
// import '@tensorflow/tfjs-node'
// import { TensorFlowEmbeddings } from '@langchain/community/embeddings/tensorflow'
// import dotenv from 'dotenv'
// import fs from 'fs'
// import path from 'path'

// dotenv.config()

// // Pfad zur Datei, in der die Vektoren gespeichert werden
// const VECTOR_STORE_PATH = path.join(__dirname, 'chatbot', 'vectorstore.json')

// // Funktion zum Speichern des Vektorstores in einer Datei
// const saveVectorStore = async (vectorStore) => {
//   // Sicherstellen, dass der Ordner existiert
//   const dir = path.dirname(VECTOR_STORE_PATH)
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true })
//   }

//   const data = JSON.stringify(vectorStore)
//   fs.writeFileSync(VECTOR_STORE_PATH, data)
// }

// // Funktion zum Laden des Vektorstores aus einer Datei
// const loadVectorStore = async () => {
//   if (fs.existsSync(VECTOR_STORE_PATH)) {
//     const data = fs.readFileSync(VECTOR_STORE_PATH)
//     const jsonData = JSON.parse(data)

//     // Manuelles Erstellen des Vektorstores aus JSON-Daten
//     const embeddings = new TensorFlowEmbeddings()
//     const vectorStore = new MemoryVectorStore(embeddings)
//     vectorStore.embeddings = embeddings
//     vectorStore.documents = jsonData.documents
//     return vectorStore
//   }
//   return null
// }

// // Initialisiere den Vektorstore und lade ggf. gespeicherte Vektoren
// const initializeVectorStore = async () => {
//   let vectorStore = await loadVectorStore()
//   if (!vectorStore) {
//     const loader = new CheerioWebBaseLoader('https://wee.gmbh')
//     const data = await loader.load()

//     const textSplitter = new RecursiveCharacterTextSplitter({
//       chunkSize: 1024,
//       chunkOverlap: 50,
//     })
//     const splitDocs = await textSplitter.splitDocuments(data)

//     const embeddings = new TensorFlowEmbeddings()

//     vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings)
//     await saveVectorStore(vectorStore)
//   }
//   return vectorStore
// }

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const userMessage = req.body.userMessage
//     try {
//       const ollama = new Ollama({
//         baseUrl: 'http://localhost:11434',
//         model: 'llama3',
//       })

//       const vectorStore = await initializeVectorStore()

//       const retriever = vectorStore.asRetriever()

//       const chain = RetrievalQAChain.fromLLM(ollama, retriever)

//       const prompt = `Dein Name ist Twyli!, du sprichst Deutsch! Du bist Assistent der Firma Twylo. Du bist ein hilfsbereiter Assistent und versuchst, Kunden dabei zu helfen, sich auf der Website zurechtzufinden. Erfinde nichts, halte dich an den context! Antworte auf die Frage ${userMessage}`

//       const result = await chain.call({
//         query: prompt,
//       })

//       res.status(200).json(result.text)
//     } catch (error) {
//       console.error(error)
//       res.status(500).json('Fehler bei der Verarbeitung der Anfrage')
//     }
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }
