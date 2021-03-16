const menuButton = document.querySelector("#menu-btn")
const mainMenu = document.querySelector("#main-menu")
let isMenuOpen = false

menuButton.addEventListener("click",() => {
    if(isMenuOpen){
        menuButton.classList.remove("open")
        mainMenu.classList.remove("open")
    }else{
        menuButton.classList.add("open")
        mainMenu.classList.add("open")
    }
    isMenuOpen = !isMenuOpen
})