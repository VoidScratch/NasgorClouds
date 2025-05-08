// Declaration
const menuContainer = document.getElementById("menu-container");
const menuTrigger = document.getElementById("menu-trigger");
let menuStatus = false; // False = DeActive

function openMenu()
{
    menuTrigger.classList.toggle("active");
    
    if(menuStatus == false)
    {
        menuContainer.style.height = "100vh";
        menuContainer.style.backgroundColor = "#E4EFE7";
        menuStatus = true;
    } else
    {
        menuContainer.style.height = "10vh";
        menuContainer.style.backgroundColor = "transparent";
        menuStatus = false;
    }
}