const express = require('express')
const app = express()
const port = 3001

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