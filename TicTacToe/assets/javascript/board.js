// BOARD

// Declaration
const board = document.getElementById("board");

// Loop / Render Board ( Make Board )
let boardLoop = 9;
let boardSquare = "";
function renderBoard()
{
    for(let i = 0; i < 9; i++)
    {
        if(i % 2 == 0)
        {
            boardSquare += `<div onclick="selectSquare(${i})" id="board-square-${i}" class="square square-color-one"></div>`;
        }

        if(i % 2 == 1)
        {
            boardSquare += `<div onclick="selectSquare(${i})" id="board-square-${i}" class="square square-color-two"></div>`;
        }
    }

    board.innerHTML += boardSquare;
}
renderBoard(); // Init

// Board Data
filledBoard = [
    [false, 0], [false, 0], [false, 0],
    [false, 0], [false, 0], [false, 0],
    [false, 0], [false, 0], [false, 0]
];

// Render Board ( Main Loop )
function renderFilledBoard()
{
    for(let i = 0; i < 9; i++)
    {
        if(filledBoard[i][0] == true)
        {
            if(filledBoard[i][1] == 1)
            {
                document.getElementById(`board-square-${i}`).innerHTML = `<div class="cross"><img src="assets/img/cross.png"></div>`;
            }
            
            if(filledBoard[i][1] == 2)
                {
                    document.getElementById(`board-square-${i}`).innerHTML = `<div class="circle"><img src="assets/img/circle.png"></div>`;    
            }
        }
        else if(filledBoard[i][0] == false)
        {
            document.getElementById(`board-square-${i}`).innerHTML = "";
        }
    }
}

// Reset Game
function resetBoard()
{
    // Reset Var
    turn = 0;
    onGame = true;

    for(let i = 0; i < filledBoard.length; i++)
    {
        filledBoard[i][0] = false;
        filledBoard[i][1] = 0;
    }

    renderFilledBoard();
}