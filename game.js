let humanScore = 0 , computerScore = 0;
function getComputerChoice()
{
    const choice = (Math.random() * 2).toFixed(0) ;
    

    if(choice == 0)
        return 'rock';
    else if(choice == 1)
        return 'paper';
    return 'scissors';
}

function getHumanChoice()
{
    const choice = prompt('Enter rock / paper / scissors ');

    return choice.toLowerCase();
}

function PlayRound(ComputerChoice , HumanChoice)
{
    if(HumanChoice === ComputerChoice)
        return 'equal';
    else if(HumanChoice === 'rock' && ComputerChoice === 'scissors')
        return 'human';
    else if(HumanChoice === 'paper' && ComputerChoice === 'rock')
        return 'human';
    else if(HumanChoice === 'scissors' && ComputerChoice === 'paper')
        return 'human';
    return 'computer';
}

function determineTheWinner(Result)
{
    if(Result === 'human')
        humanScore++;
    else if(Result === 'computer')
        computerScore++;
}

function playGame()
{
    let round = 1;

    console.log("round " + round + "............./n");   
    determineTheWinner(PlayRound(getComputerChoice() , getHumanChoice()));
    round++;

    console.log("round " + round + "............./n");   
    determineTheWinner(PlayRound(getComputerChoice() , getHumanChoice()));
    round++;

    console.log("round " + round + "............./n");   
    determineTheWinner(PlayRound(getComputerChoice() , getHumanChoice()));
    round++;

    console.log("round " + round + "............./n");   
    determineTheWinner(PlayRound(getComputerChoice() , getHumanChoice()));
    round++;

    console.log("round " + round + "............./n");   
    determineTheWinner(PlayRound(getComputerChoice() , getHumanChoice()));
    round++;

    if(humanScore > computerScore)
        console.log("You Win");
    else if(computerScore > humanScore)
        console.log("You Lose");
    else
        console.log("Tie");


    
}

playGame();
