const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const mongoose = require('mongoose')

mongoose.connect('mongodb://<username>:<password>@ds123465.mlab.com:23465/test-company', { useNewUrlParser: true })
        .then(() => console.log('MongoDB is connected'))
        .catch(error => console.log('Error occured ', error))

const server = express()

app.prepare().then(() => {

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use('/api/employees', require('./routes/index'))
    server.get('*', (req,res) => {
        return handle(req,res)
    })
    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})

module.exports = server
