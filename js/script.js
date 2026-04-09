function getComputerChoice(){
    let arr = ["rock", "paper", "scissors"];
    let guess = (Math.floor(Math.random()*10))%3;
    return arr[guess];
}

function getHumanChoice(){
    let str = prompt("Enter your choice");
    let humanChoice = String(str);
    humanChoice = humanChoice.toLowerCase();
}