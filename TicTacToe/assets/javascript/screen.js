const screenContainer = document.getElementById("screenContainer");
const screenText = document.getElementById("screenText");

// Win Screen
function winScreen(playerNum)
{
    // Active Screen Container
    screenContainer.classList.add("active");

    // Show Text
    screenText.innerText = `Player ${playerNum} Wins`;

}

// Button Function
function newGame()
{
    resetBoard();
    deActiveSquare();
    screenContainer.classList.remove("active");
}