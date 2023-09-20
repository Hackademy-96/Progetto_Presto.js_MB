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
// function clock() {
//     let interval = setInterval(getNumbers)
//     function getNumbers(idNumber) {
//         if (counter <= 999) {
//             counter++
//             idNumber.innerHTML = counter
//         }else{
//             clearInterval(interval)
//         }
//     } 
// }
// clock()

function clock(idNumber,num) {
    let interval = setInterval(()=>{
        if (counter < num) {
            counter++
            idNumber.innerHTML = counter
        }else{
            clearInterval(interval)
        }
    }, 1)
}
clock(articlesNumber,1000)
clock(userNumber,900)
clock(productsNumber,850)
