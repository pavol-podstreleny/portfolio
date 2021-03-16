const menuButton = document.querySelector("#menu-btn")
console.log(menuButton)
let isMenuOpen = false

menuButton.addEventListener("click",() => {
    if(isMenuOpen){
        menuButton.classList.remove("open")
    }else{
        menuButton.classList.add("open")
    }
    isMenuOpen = !isMenuOpen
})