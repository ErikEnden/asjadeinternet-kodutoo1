const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

let lightEnabled = false

app.get('/', function(request, response){
    response.send(lightEnabled)
})

app.get('/toggle', function(request, response){
    if(lightEnabled === true){
        lightEnabled = false
    } else {
        lightEnabled = true
    }
    response.sendStatus(200)
})

app.listen(port, () => console.log('App listening on ' + port))