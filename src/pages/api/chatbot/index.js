import { Ollama } from '@langchain/community/llms/ollama'
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
import { RetrievalQAChain } from 'langchain/chains'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import '@tensorflow/tfjs-node'
import { TensorFlowEmbeddings } from '@langchain/community/embeddings/tensorflow'
import dotenv from 'dotenv'

dotenv.config()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userMessage = req.body.userMessage
    try {
      const ollama = new Ollama({
        baseUrl: 'http://localhost:11434',
        model: 'llama3',
      })

      const loader = new CheerioWebBaseLoader('https://wee.gmbh')
      const data = await loader.load()

      // Split text into chunks
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1024,
        chunkOverlap: 50,
      })
      const splitDocs = await textSplitter.splitDocuments(data)

      // TensorFlow Embedding to store these chunks in the datastore
      const vectorStore = await MemoryVectorStore.fromDocuments(
        splitDocs,
        new TensorFlowEmbeddings(),
      )
      const retriever = vectorStore.asRetriever()
      const chain = RetrievalQAChain.fromLLM(ollama, retriever)
      const result = await chain.call({
        query: userMessage,
      })

      res.status(200).json(result.text)
    } catch (error) {
      console.error(error)
      res.status(500).json('Fehler bei der Verarbeitung der Anfrage')
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
