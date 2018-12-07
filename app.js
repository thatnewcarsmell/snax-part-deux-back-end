const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000

const router = express.Router()
const snacks = require('./snacks')
const reviews = require('./reviews')
const users = require('./users')

app.use(parser.json())
app.use(cors())
app.use(router)

app.use('/snacks', snacks)

app.use('/reviews', reviews)

app.use('/users', users)

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`Mmmmmmm, I'm hungry. Let's see what's for snacktime over on port:${port}!!!!!!`)
})