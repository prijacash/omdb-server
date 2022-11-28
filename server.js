// require packages
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const rowdy = require('rowdy-logger')
const authLockedRoute = require('./controllers/api-v1/authLockedRoute')

// config express app
const app = express()
const PORT = process.env.PORT || 3001 
// for debug logging 
const rowdyResults = rowdy.begin(app)
// cross origin resource sharing 
app.use(cors())
// request body parsing
app.use(express.urlencoded({ extended: false })) // optional 
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const myMiddleWare = (req, res, next) => {
  console.log('hello from a middleware')
  res.locals.myData = 'some info'
  next() // ok express, go to the next thing
}

// app.use(myMiddleWare)

// GET / -- test index route
// route specific middleware, only will be applied here on this route
// app.get('/', authLockedRoute, (req, res) => {  INITIAL CODE 32-34!
//   res.json({ msg: 'hello backend 🤖' })
// })

app.get('/home', (req, res) => {
  res.json({
    name: 'Bill',
    age: 99
  })
})


// controllers
// prefixing the routes with a semantic version
app.use('/api-v1/users', require('./controllers/api-v1/users.js'))

// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`is that port ${PORT} I hear? 🙉`)
})

