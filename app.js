require('dotenv').config()
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'GET, HEAD, OPTIONS, POST, PUT, DELETE',
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  next()
})

const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://osandarmdb:osanda9482@capisco.wkfnqc9.mongodb.net/?retryWrites=true&w=majority',
  { usenewurlparser: true },
)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('connected to the database successfully!'))

app.use(express.json())

const studentroute = require('./routes/student.route')
app.use('/student', studentroute)

const subjectSchema = require('./routes/subject.route')
app.use('/subject', subjectSchema)

app.use((req, res) => {
  res.status.json({ success: false })
})

app.listen(3000, () => {
  console.log('backend server started')
})
