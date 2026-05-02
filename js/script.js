let human = 0;
let computer = 0;
let error = 0;
let counter = 0;
let gcounter = 0;

const thirdContainer = document.querySelector(".three");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function(e){playGame(String(e.target.id))}) //Remember that the function that you pass as argument to addEventListener() can either have one argument i.e. event or no arguments
});


function getComputerChoice(){
    let arr = ["rock", "paper", "scissors"];
    let guess = (Math.floor(Math.random()*10))%3;
    //console.log("computerChoice" + arr[guess]);
    return arr[guess];
}

function getHumanChoice(){
    let str = prompt("Rock, paper or scissors ma boi?");
    let humanChoice = String(str);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playGame(input){

    playRound(input);

    if(counter == 5){
        counter = 0;
        gcounter++;
        console.log(`human: ${human}`);
        console.log(`computer: ${computer}`)

        if(human>computer){
            const para = document.createElement("p");
            para.textContent = `Game ${gcounter}: You won the game!`;
            thirdContainer.appendChild(para);
            //alert("You won the game!");
        }
        else if(computer>human){
            const para = document.createElement("p");
            para.textContent = `Game ${gcounter}: You lost the game....better luck next time`;
            thirdContainer.appendChild(para);
            //alert("You lost the game....better luck next time");
    }
        else if (computer==human){
            const para = document.createElement("p");
            para.textContent = `Game ${gcounter}: It's a tie`;
            thirdContainer.appendChild(para);
            //alert("It's a tie");
    }

        computer = 0;
        human = 0;
    }
    
}

function playRound(input){
/*
    if(counter == 5){
        gcounter++;
        if(human>computer){
            const para = document.createElement("p");
            para.textContent = `Game ${gcounter}: You won the game!`;
            thirdContainer.appendChild(para);
            //alert("You won the game!");
        }
        else if(computer>human){
            const para = document.createElement("p");
            para.textContent = `Game ${gcounter}: You lost the game....better luck next time`;
            thirdContainer.appendChild(para);
            //alert("You lost the game....better luck next time");
    }
        else if (computer==human){
            const para = document.createElement("p");
            para.textContent = `Game ${gcounter}: It's a tie`;
            thirdContainer.appendChild(para);
            //alert("It's a tie");
    }
    }
*/
    let humanChoice = input;
    let computerChoice = getComputerChoice();

    console.log("computerChoice: " + computerChoice);
    console.log("humanChoice: " + humanChoice);

    if (humanChoice == "rock" && computerChoice == "paper"){
        counter++;
        const para = document.createElement("p");
        para.textContent = `Round ${counter}: You lose! paper beats rock`;
        thirdContainer.appendChild(para);
        //alert("You lose! paper beats rock");
        computer++;
    }

    else if (humanChoice == "paper" && computerChoice == "rock"){
        counter++;
        const para = document.createElement("p");
        para.textContent = `Round ${counter}: You win! Paper beats rock`;
        thirdContainer.appendChild(para);
        //alert("You win! Paper beats rock");
        human++;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors"){
        counter++;
        const para = document.createElement("p");
        para.textContent = `Round ${counter}: You win! Rock beats scissors`;
        thirdContainer.appendChild(para);
        //alert("You win! Rock beats scissors");
        human++;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock"){
        counter++;
        const para = document.createElement("p");
        para.textContent = `Round ${counter}: You lose! Rock beats scissors`;
        thirdContainer.appendChild(para);
        //alert("You lose! Rock beats paper");
        computer++;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors"){
        counter++;
        const para = document.createElement("p");
        para.textContent = `Round ${counter}: You lose! Scissors beats paper`;
        thirdContainer.appendChild(para);
        //alert("You lose! Scissors beats paper");
        computer++;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper"){
        counter++;
        const para = document.createElement("p");
        para.textContent = `Round ${counter}: You win! Scissors beats paper`;
        thirdContainer.appendChild(para);
        //alert("You win! Scissors beats rock");
        human++;
    }

    else if (humanChoice == computerChoice){
        counter++;
        const para = document.createElement("p");
        para.textContent = `Round ${counter}: Draw`;
        thirdContainer.appendChild(para);
        //alert("Draw");
    }
/*
    else{
        alert("Try again :(");
        console.log(humanChoice + " " + computerChoice)
        error++;
    }
*/
}

function playGame(){
    for(let i=0; i< 5; i++){
        playRound();
    }

    if(human>computer){alert("You won the game!");}
    else if(computer>human){alert("You lost the game....better luck next time");}
    else if (computer==human){alert("It's a tie");}
}

//function 

//playGame();