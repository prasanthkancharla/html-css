const searchbutton = document.querySelector(".header .search")
const searchcontainer = document.querySelector(".searchcontainer")
const closebutton = document.querySelector(".searchcontainer .quicklinks .close")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")

searchbutton.addEventListener("click",() => {
    searchcontainer.classList.remove("hide")
    header.classList.add("hide");
    overlay.classList.add("show")
    
} )

closebutton.addEventListener("click",() => {
    header.classList.remove("hide");
    overlay.classList.remove("show")
    searchcontainer.classList.add("hide")
} )

