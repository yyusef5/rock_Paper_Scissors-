function getComputerChoice()
{
    const choice = (Math.random() * 2).toFixed(0) ;
    

    if(choice == 0)
        return 'Rock';
    else if(choice == 1)
        return 'Paper';
    return 'Scissors';
}

