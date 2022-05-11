import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import 'express-async-errors'
import morgan from 'morgan'
// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
// routes
import authRouter from './routes/v1/authRoutes.js'
import jobsRouter from './routes/v1/jobsRoutes.js'
import authenticateUser from './middleware/auth.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

dotenv.config()

const app = express()
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const __dirname = dirname(dirname(fileURLToPath(import.meta.url)))

app.use(express.static(path.resolve(__dirname, './client/build')))

app.use(express.json())

app.get('/', (req, res) => {
  res.json({msg:'welcome'})
})
app.get('/api/v1', (req, res) => {
  res.json({msg:'API'})
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080

const start = async () => {
  try{
    console.log(process.env.MONGO_URL)
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error);
  }
}

start()
