let navbar = document.querySelector("#navbar")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom", "textnavbar")

    }else{
        navbar.classList.remove("navbar-custom", "textnavbar")
    }
})

let articlesNumber = document.querySelector("#articlesNumber")
let userNumber = document.querySelector("#usersNumber")
let productsNumber = document.querySelector("#productsNumber")

let counter = 0
let interval = setInterval(() => {
    if (counter < 1000) {
        counter++
        articlesNumber.innerHTML = counter
        console.log(counter);
    }else{
        clearInterval(interval)
    }
}, 1);