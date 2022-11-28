// require mongoose package
const mongoose = require("mongoose")
require('dotenv').config()


// here is where you can update your db name
const devDatabase = 'mernAuth'
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://127.0.0.1/${devDatabase}`
const api_key = process.env.API_KEY

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

// Connection methods
db.once('open', () => {
  console.log(`🔗 Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error',  err => {
  console.error(`🔥 Datacenter burned down:\n${err}`)
})


module.exports = {
  User: require('./User')
}