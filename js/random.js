var input1 = prompt("Please enter the starting number")
var bottomNumber = parseInt(input1)
var input = prompt("Please enter a number")
var topNumber = parseInt(input)
var randomNumber = Math.floor( Math.random() * (topNumber - bottomNumber + 1) ) + bottomNumber
var message = "<p>" + randomNumber + " is a number between "+ bottomNumber +" and " + topNumber +"</p>"
document.write(message)

// var dieRoll = Math.floor( Math.random * 6 ) + 1