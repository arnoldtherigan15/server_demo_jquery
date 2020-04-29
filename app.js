if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
// const cors = require('cors')
const PORT = process.env.PORT
const app = express()

// app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use('/',routes)

app.use(errorHandler)
app.listen(PORT,_=>{console.log(`listening on port ${PORT}`)})

