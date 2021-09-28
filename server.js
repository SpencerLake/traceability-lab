const express = require('express')
const path = require('path')
const app = express()

const Rollbar = require("rollbar")

const rollbar = new Rollbar({
    accessToken: '',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.use(express.json())


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info("Html was gotten successfully")
})


const port = process.env.PORT || 4500

app.use(rollerbar.errorHandler())