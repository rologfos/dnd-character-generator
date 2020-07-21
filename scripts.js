const app = document.getElementById('root')

//Call Api
var request = new XMLHttpRequest()
request.open('GET', 'https://www.dnd5eapi.co/api/spells/', true)

request.onload = function () {
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    //Data recieved
    const errorMessage = document.createElement('text')
    errorMessage.textContent = `It Worked`
    app.appendChild(errorMessage)
  } else {
    //Error
    const errorMessage = document.createElement('text')
    errorMessage.textContent = `D&D 5e api could not be reached`
    app.appendChild(errorMessage)
  }
}

request.send()