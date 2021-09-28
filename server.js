const express = require('express')
const path = require('path')
const app = express()

const Rollbar = require("rollbar")

const rollbar = new Rollbar({
    accessToken: 'abc6df0e32c74c1aa4c6eb30aa70e996',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.use(express.json())
app.use(express.static('client'))


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info("Html was gotten successfully")
})

// app.get('/api/noyes', (req,res) => {
    
    
//     res.status(200).send()
// })

app.get('/api/test', (req,res) => {
    try {
        thisDontWork();
    } catch (error) {
        console.error(error);
    }
    rollbar.info('you been getting, those wrong things')
})

const port = process.env.PORT || 4500

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`You're up and running on: ${port}`))