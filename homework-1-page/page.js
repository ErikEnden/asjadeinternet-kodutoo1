window.onload = function(){
    let button = document.getElementById('toggleButton')
    getLedState()
    button.addEventListener('click', toggleLed)
}
function toggleLed() {
    let http = new XMLHttpRequest()
    http.open('GET', 'iot.ermine.ee:3001/toggle')
    http.send(null)
    console.log(http.responseText)
    getLedState()
}

function getLedState() {
    let http = new XMLHttpRequest()
    http.open('GET', 'iot.ermine.ee:3001')
    http.send(null)
    let stateText = ''
    let currentState = http.responseText
    if(currentState === true){
        stateText = 'On'
    } else {
        stateText = 'Off'
    }
    document.getElementById('text').innerHTML = 'Current status: ' + stateText 
}