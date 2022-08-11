function getCompChoice(){
    let rand = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch(rand){
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        case 3:
            choice = "rock";
            break;
    }
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
game();