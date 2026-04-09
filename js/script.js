let human = 0;
let computer = 0;


function getComputerChoice(){
    let arr = ["rock", "paper", "scissors"];
    let guess = (Math.floor(Math.random()*10))%3;
    return arr[guess];
}

function getHumanChoice(){
    let str = prompt("Enter your choice");
    let humanChoice = String(str);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "paper"){
        alert("You lose! paper beats rock");
        computer++;
    }

    else if (humanChoice == "paper" && computerChoice == "rock"){
        alert("You win! Paper beats rock");
        human++;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors"){
        alert("You win! Rock beats scissors");
        human++;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock"){
        alert("You lose! Rock beats paper");
        computer++;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors"){
        alert("You lose! Scissors beats paper");
        computer++;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper"){
        alert("You win! Scissors beats rock");
        human++;
    }

    else{
        alert("Try again :(");
    }
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound();
    }

    if(humanChoice>computerChoice){alert("You won the game!");}
    else if(computerChoice>humanChoice){alert("You lost the game....better luck next time");}
}