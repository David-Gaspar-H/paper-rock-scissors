function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function removeCompTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('comp-playing');
}


function getCompChoice(){
    let rand = Math.floor(Math.random() * 3) + 1;
    let choice;
    const rock = document.querySelector(".rock");
    const scissors = document.querySelector(".scissors");
    const paper = document.querySelector(".paper");
    switch(rand){
        case 1:
            choice = "paper";
            paper.classList.add('comp-playing');
            break;
        case 2:
            choice = "scissors";
            scissors.classList.add('comp-playing');
            break;
        case 3:
            choice = "rock";
            rock.classList.add('comp-playing');
            break;
    }
    const keys = Array.from(document.querySelectorAll('.button'));
    keys.forEach(key => key.addEventListener('transitionend', removeCompTransition));


    return choice;
}

function round(userChoice,compChoice){
    let choice;
    let result;
    switch(userChoice.charAt(0).toLowerCase()){
        case "r":
            choice = "rock";
            break;
        case "p":
            choice = "paper";
            break;
        case "s":
            choice = "scissors";
            break;
        default:
            choice = "rock"
            break;
    }
    if (choice == compChoice){
        result = "Dang, its a tie";
    }
    if (choice == "rock" && compChoice == "scissors"){
        result = "You win! rock beats scissors";
    }
    if (choice == "rock" && compChoice == "paper"){
        result = "You lose! paper beats rock";
    }
    if (choice == "paper" && compChoice == "rock"){
        result = "You win! paper beats rock";
    }
    if (choice == "paper" && compChoice == "scissors"){
        result = "You lose! scissors beat paper";
    }
    if (choice == "scissors" && compChoice == "paper"){
        result = "You win! scissors beat paper";
    }
    if (choice == "scissors" && compChoice == "rock"){
        result = "You lose! rock beats scissors";
    }
    return result;
}

function game(){
    let compScore = 0;
    let userScore = 0;
    let result;
    let userChoice;
    for(let i = 0; i < 5; i++){
        userChoice = prompt("Please choose rock paper or scissors");
        result = round(userChoice, getCompChoice());
        console.log(result);
        if(result.charAt(4) == "w"){
            userScore++;
        }
        else if(result.charAt(4) == "l"){
            compScore++;
        }
        else{
            i--;
        }
    }
    if (userScore > compScore){
        console.log(`You win with ${userScore} points`);
    }
}
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const results = document.querySelector(".results")
let choice;
rock.addEventListener('click', () => {
    rock.classList.add('playing');
    choice = 'rock'
    results.textContent = (round(choice, getCompChoice()));
});
scissors.addEventListener('click', () => {
    scissors.classList.add('playing');
    choice = 'scissors'
    results.textContent = (round(choice, getCompChoice()));
});
paper.addEventListener('click', () => {
    paper.classList.add('playing');
    choice = 'paper'
    results.textContent = (round(choice, getCompChoice()));
    
});

    const keys = Array.from(document.querySelectorAll('.button'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

