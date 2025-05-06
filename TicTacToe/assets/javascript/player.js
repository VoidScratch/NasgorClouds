// PLAYER

// Player Turn
playerTurn = 1;
let turn = 0;

// Player Point
let playerOne = 0;
let playerTwo = 0;

// Init HUD
document.getElementById("player-box-1").classList.add("active");

// Chage Player
function changePlayer(playerNum)
{
    playerTurn = playerNum;
    if(playerNum == 1)
    {
        document.getElementById("player-box-1").classList.add("active");
        document.getElementById("player-box-2").classList.remove("active");
    }
    else if(playerNum == 2)
    {
        document.getElementById("player-box-1").classList.remove("active");
        document.getElementById("player-box-2").classList.add("active");
    }
}

// Player Win Mechanism ( Add Score )
function playerWins(playerNum)
{
    // Sound
    const vitoryNote = victoryAudio.cloneNode();
    vitoryNote.play();
    
    // Add Score
    if(playerNum == 1)
    {
        playerOne += 1;
        changePlayer(2);
    }
    else if(playerNum == 2)
    {
        playerTwo += 1;
        changePlayer(1);
    }

}

// Reset Player ( Reset Game )
function resetScore()
{
    // Player Reset
    changePlayer(1);

    // Reset Score
    playerOne = 0;
    playerTwo = 0;

    // Set OnPLay to 1
    changePlayer(1); 

    // Update Score
    updateScore();

    // Reset Board
    resetBoard();

    // Close Menu
    openMenu();
}