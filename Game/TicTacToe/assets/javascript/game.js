// GAME

// Game mechanic
onGame = true;

// Sound Effect
const selectAudio = document.getElementById("selectAudio");
const victoryAudio = document.getElementById("victoryAudio");

function updateScore()
{
    document.getElementById("player-1-score").innerText = playerOne;
    document.getElementById("player-2-score").innerText = playerTwo;
}

updateScore(); // Init

function selectSquare(squareID)
{
    if(filledBoard[squareID][0] == false && onGame == true)
    {
        if(playerTurn == 1)
        {
            filledBoard[squareID][1] = 1;
            changePlayer(2);
        }    
        else if(playerTurn == 2)
        {
            filledBoard[squareID][1] = 2;
            changePlayer(1);
        }

        // ADD Turn ( MAX 9 ) 
        turn += 1;

        // Sound Effect
        const selectNote = selectAudio.cloneNode();
        selectNote.play();

        // Update Board Data
        filledBoard[squareID][0] = true;
        checkCondition();
    }
    renderFilledBoard();
}

function checkCondition()
{   
    // Player 1 Wins
    if(filledBoard[0][1] == 1 && filledBoard[1][1] == 1 && filledBoard[2][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(0, 1, 2);
    }

    if(filledBoard[3][1] == 1 && filledBoard[4][1] == 1 && filledBoard[5][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(3, 4, 5);
    }

    if(filledBoard[6][1] == 1 && filledBoard[7][1] == 1 && filledBoard[8][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(6, 7, 8);
    }

    if(filledBoard[0][1] == 1 && filledBoard[4][1] == 1 && filledBoard[8][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(0, 4, 8);
    }

    if(filledBoard[2][1] == 1 && filledBoard[4][1] == 1 && filledBoard[6][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(2, 4, 6);
    }

    if(filledBoard[0][1] == 1 && filledBoard[3][1] == 1 && filledBoard[6][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(0, 3, 6);
    }
    
    if(filledBoard[1][1] == 1 && filledBoard[4][1] == 1 && filledBoard[7][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(1, 4, 7);
    }

    if(filledBoard[2][1] == 1 && filledBoard[5][1] == 1 && filledBoard[8][1] == 1)
    {
        onGame = false;
        playerWins(1);
        draw = false;
        activeSquare(2, 5, 8);
    }

    // Player 2 Wins
    if(filledBoard[0][1] == 2 && filledBoard[1][1] == 2 && filledBoard[2][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(0, 1, 2);
    }

    if(filledBoard[3][1] == 2 && filledBoard[4][1] == 2 && filledBoard[5][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(3, 4, 5);
    }

    if(filledBoard[6][1] == 2 && filledBoard[7][1] == 2 && filledBoard[8][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(6, 7, 8);
    }

    if(filledBoard[0][1] == 2 && filledBoard[4][1] == 2 && filledBoard[8][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(0, 4, 1);
    }

    if(filledBoard[2][1] == 2 && filledBoard[4][1] == 2 && filledBoard[6][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(2, 4, 6);
    }

    if(filledBoard[0][1] == 2 && filledBoard[3][1] == 2 && filledBoard[6][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(0, 3, 6);
    }
    
    if(filledBoard[1][1] == 2 && filledBoard[4][1] == 2 && filledBoard[7][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(1, 4, 7);
    }

    if(filledBoard[2][1] == 2 && filledBoard[5][1] == 2 && filledBoard[8][1] == 2)
    {
        onGame = false;
        playerWins(2);
        draw = false;
        activeSquare(2, 5, 8);
    }

    // Draw Condition
    if(turn > 8 || turn == 9)
    {
        onGame = false;
        turn = 0;
        activeSquare();
    }

    updateScore();

}
