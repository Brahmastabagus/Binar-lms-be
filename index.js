require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT

app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
})