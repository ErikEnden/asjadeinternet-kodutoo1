window.onload = function(){
    let button = document.getElementById('toggleButton')
    getLedState()
    button.addEventListener('click', toggleLed)
}
function toggleLed() {
    let http = new XMLHttpRequest()
    http.open('GET', 'http://iot.ermine.ee:3001/toggle')
    http.send(null)
    getLedState()
}

function getLedState() {
    let http = new XMLHttpRequest()
    http.open('GET', 'http://iot.ermine.ee:3001')
    let stateText = ''
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            let currentState = http.responseText
            console.log(currentState)
            if(currentState === true){
                stateText = 'On'
            } else {
                stateText = 'Off'
            }
        }
        document.getElementById('text').innerHTML = 'Current status: ' + stateText 
    }
    http.send(null)
}