const mongoose = require('mongoose')

const DB_USER = 'marykodemia'
const DB_PASSWORD = 'Q450DOyJW4GFqgEp'
const DB_HOST = 'cluster0.bcs1k.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect(){
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connect