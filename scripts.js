const box_name = document.getElementById('name')
const box_race = document.getElementById('race')
const box_job = document.getElementById('job')

//Call Api
var request = new XMLHttpRequest()
request.open('GET', 'https://www.dnd5eapi.co/api/spells/', true)

request.onload = function () {
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    //Data recieved
    //var text = document.createElement('text')
    //text.textContent = 'Greg'
    //box_name.appendChild(text)
    //text.textContent = 'Human'
    //box_race.appendChild(text)
    //text.textContent = 'Fighter'
    //box_job.appendChild(text)
    const errorMessage = document.createElement('text')
    errorMessage.textContent = 'D&D 5e api could not be reached'
    app.appendChild(errorMessage)
  } else {
    //Error
    const errorMessage = document.createElement('text')
    errorMessage.textContent = 'D&D 5e api could not be reached'
    app.appendChild(errorMessage)
  }
}

request.send()