// import 'cheerio'
// import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
// import { MemoryVectorStore } from 'langchain/vectorstores/memory'
// import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai'
// import { pull } from 'langchain/hub'
// import { ChatPromptTemplate } from '@langchain/core/prompts'
// import { StringOutputParser } from '@langchain/core/output_parsers'

// import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'

// const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const pTagSelector = 'p'
//     const loader = new CheerioWebBaseLoader('https://wee.gmbh/', {
//       selector: pTagSelector,
//     })

//     const docs = await loader.load()

//     const textSplitter = new RecursiveCharacterTextSplitter({
//       chunkSize: 1000,
//       chunkOverlap: 200,
//     })
//     const splits = await textSplitter.splitDocuments(docs)

//     const vectorStore = await MemoryVectorStore.fromDocuments(
//       splits,
//       new OpenAIEmbeddings({ apiKey }),
//     )

//     // Retrieve and generate using the relevant snippets of the blog.
//     const retriever = vectorStore.asRetriever({
//       k: 6,
//       searchType: 'similarity',
//     })

//     const prompt = (await pull) < ChatPromptTemplate > 'rlm/rag-prompt'
//     const llm = new ChatOpenAI({
//       model: 'gpt-3.5-turbo',
//       temperature: 0,
//     })

//     const exampleMessages = await prompt.invoke({
//       context: 'filler context',
//       question: 'filler question',
//     })
//     exampleMessages
//     console.log('exampleMessages:', exampleMessages.messages[0].content)

//     const ragChain = await createStuffDocumentsChain({
//       llm,
//       prompt,
//       outputParser: new StringOutputParser(),
//     })

//     const retrievedDocs = await retriever.getRelevantDocuments(
//       'bietet wee Fahrzeugvermietung an?',
//     )

//     await ragChain.invoke({
//       question: 'bietet wee Fahrzeugvermietung an?',
//       context: retrievedDocs,
//     })
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

// import 'cheerio'
// import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
// import { MemoryVectorStore } from 'langchain/vectorstores/memory'
// import { pull } from 'langchain/hub'
// import { ChatPromptTemplate } from '@langchain/core/prompts'
// import { StringOutputParser } from '@langchain/core/output_parsers'

// import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
// import { transformers } from '@huggingface/transformers'
// import { SentenceTransformerEmbeddings } from 'sentence-transformers'

// // Lade das LLaMA-Modell
// const llmModel =
//   transformers.AutoModelForSeq2SeqLM.from_pretrained('facebook/llama')
// const tokenizer = transformers.AutoTokenizer.from_pretrained('facebook/llama')

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const pTagSelector = 'p'
//     const loader = new CheerioWebBaseLoader('https://wee.gmbh/', {
//       selector: pTagSelector,
//     })

//     const docs = await loader.load()

//     const textSplitter = new RecursiveCharacterTextSplitter({
//       chunkSize: 1000,
//       chunkOverlap: 200,
//     })
//     const splits = await textSplitter.splitDocuments(docs)

//     const vectorStore = await MemoryVectorStore.fromDocuments(
//       splits,
//       new SentenceTransformerEmbeddings(),
//     )

//     // Retrieve and generate using the relevant snippets of the blog.
//     const retriever = vectorStore.asRetriever({
//       k: 6,
//       searchType: 'similarity',
//     })

//     const prompt = (await pull) < ChatPromptTemplate > 'rlm/rag-prompt'

//     const exampleMessages = await prompt.invoke({
//       context: 'filler context',
//       question: 'filler question',
//     })
//     console.log('exampleMessages:', exampleMessages.messages[0].content)

//     const ragChain = await createStuffDocumentsChain({
//       llm: llmModel,
//       tokenizer: tokenizer,
//       prompt,
//       outputParser: new StringOutputParser(),
//     })

//     const retrievedDocs = await retriever.getRelevantDocuments(
//       'bietet wee Fahrzeugvermietung an?',
//     )

//     const response = await ragChain.invoke({
//       question: 'bietet wee Fahrzeugvermietung an?',
//       context: retrievedDocs,
//     })

//     res.status(200).json(response)
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }
