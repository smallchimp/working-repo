let fs = require('fs')

let bio = fs.readFileSync('1-json.json')
let bioJSON = bio.toString()
let bioData = JSON.parse(bioJSON)

bioData.name = "Jordan"
bioData.age = 25

let bioDataJSON = JSON.stringify(bioData)
fs.writeFileSync('1-json.json', bioDataJSON)