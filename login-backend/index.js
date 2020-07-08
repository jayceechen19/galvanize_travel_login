const express = require('express')
const bodyParser = require('body-parser')
const queries = require('./queries')
const cors = require('cors')

const app = express()
const port = 3002

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

//query to create a new user
app.post('/register', queries.registerUser)
//query to validate login
app.post('/login', queries.loginUser)