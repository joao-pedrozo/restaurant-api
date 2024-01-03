import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(helmet())

app.get('/', (req, res) => {
  res.send('Hello, Express 1!')
})

export { app, port }
