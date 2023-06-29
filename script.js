var rPS= ["R", "P", "S"] 
var results = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

var playerChoice = prompt("Please choose R,P,S")

function playGame(playerChoice) {
    var cpuChoice = rPS[Math.floor(Math.random() * rPS.length)]

    if (playerChoice === cpuChoice){
        alert("Tied!")
    } else if (playerChoice === "R" && cpuChoice === "P") {
        alert("You lost!")
    } else if (playerChoice === "R" && cpuChoice === "S") {
        alert("You won!")
    } else if (playerChoice === "S" && cpuChoice === "R") {
        alert("You lost!")
    } else if (playerChoice === "S" && cpuChoice === "P") {
        alert("You won!")
    } else if (playerChoice === "P" && cpuChoice === "S") {
        alert("You lost!")
    } else if (playerChoice === "P" && cpuChoice === "R") {
        alert("You won!")
    }
}