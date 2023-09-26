let navbar = document.querySelector("#navbar")
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom")
    }else{
        navbar.classList.remove("navbar-custom")
    }
})

let articlesNumber = document.querySelector("#articlesNumber")
let userNumber = document.querySelector("#usersNumber")
let productsNumber = document.querySelector("#productsNumber")

function clock(idNumber,num,freq) {
    let counter = 0
    let interval = setInterval(()=>{
        if (counter < num) {
            counter++
            idNumber.innerHTML = counter  
        }else{
            clearInterval(interval)
        }
    }, freq)
}

let isEntered = false
let observer = new IntersectionObserver ((entries)=>{
    entries.forEach ((entry)=>{
        if(entry.isIntersecting && isEntered == false){
            clock(articlesNumber,1000,5)
            clock(userNumber,500,10)
            clock(productsNumber,300,15)
            isEntered = true
        }
    })
},{threshold: 1})
observer.observe(articlesNumber)

let cards =[
    {name: "Sparkling Grape Soda", category: "Bevarages", price: 3.30 , url: "https://picsum.photos/200"},
    {name: "Shrimp Cracker", category: "Salted Snacks", price: 4.50, url: "https://picsum.photos/201"},
    {name: "Wasabi Potato Chips", category: "Salted Snacks", price: 2.90, url: "https://picsum.photos/202"},
    {name: "Matcha Milk Tea", category: "Bevarages", price: 3.00, url: "https://picsum.photos/203"},
    {name: "Veggie Ramen", category: "Noodles & Ramen", price: 4.50, url: "https://picsum.photos/204"},
]
let cardWrapper = document.querySelector("#cardWrapper")
cards.forEach((annuncio,i)=>{
    if(i >= cards.length - 3){
        let div = document.createElement("div")
        div.classList.add("col-12","col-md-4","col-lg-3", "my-5")
        div.innerHTML =`
        <div class="card">
        <div class="overflow-hidden">
        <img src="${annuncio.url}" class="card-img-top transition" alt="...">
        </div>
        <span class="fontIndie position-absolute top-0 start-100 translate-middle badge rounded-pill bgNew" style="font-size:1.3rem;">NEW
        </span>
        <div class="fontIndie card-body">
        <h5 class="fontGaegu fs-3 color-a card-title">${annuncio.nome}</h5>
        <p class="fontGaegu fs-5 card-text">${annuncio.categoria}</p>
        <p class="card-text fw-bold fontIndie">${annuncio.prezzo}€</p>
        <div class="d-flex justify-content-between">
        <a href="#" class="fontMarker customButtonCards customButtonCards2">ADD TO CART</a>
        <i class="bi bi-bookmark-heart fs-2"></i>
        </div>
        <p class="fontIndie fs-5 card-text mt-3 text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
        </div>
        `
        cardWrapper.appendChild(div)
    }
})

let favorites = document.querySelectorAll(".bi-bookmark-heart")
favorites.forEach((fav)=>{
    fav.addEventListener("click", ()=>{
        fav.classList.toggle("bi-bookmark-heart")
        fav.classList.toggle("bi-bookmark-heart-fill")
        fav.classList.toggle("colorHeart")
    })
})
