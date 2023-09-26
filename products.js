let navbar = document.querySelector("#navbar")
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom")
    }else{
        navbar.classList.remove("navbar-custom")
    }
})

fetch("./products.json").then((response)=> response.json()).then((data)=>{
    // crare card
    let productsWrapper = document.querySelector("#productsWrapper")

    function createCards(array) {
        productsWrapper.innerHTML = ""
        array.forEach((card, i)=>{
            let div = document.createElement("div")
            div.classList.add("col-12","col-md-6","col-lg-4", "my-5")
            div.innerHTML =`
            <div class="card">
            <div class="overflow-hidden">
            <img src="https://picsum.photos/20${i}" class="card-img-top transition" alt="...">
            </div>
            <div class="fontIndie card-body">
            <h5 class="fontGaegu fs-3 color-a card-title">${card.name}</h5>
            <p class="fontGaegu fs-5 card-text">${card.category}</p>
            <p class="card-text fw-bold fontIndie">${card.price}€</p>
            <div class="d-flex justify-content-between">
            <a href="#" class="fontMarker customButtonCards customButtonCards2">ADD TO CART</a>
            <i class="bi bi-bookmark-heart fs-2"></i>
            </div>
            <p class="fontIndie fs-5 card-text mt-3 text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>
            `
            productsWrapper.appendChild(div)
        })
    }
    createCards(data)
    //filtro category
    let categoryButtons = document.querySelector("#categoryButtons")

    function setCategories(){
        let categories = data.map((el)=> el.category)
        let uniqueCategories =[];
        categories.forEach((xCategory)=>{
            if(!uniqueCategories.includes(xCategory)){
                uniqueCategories.push(xCategory)
            }
        })
        uniqueCategories.forEach((uniqueCategory)=>{
            let div = document.createElement("div")
            div.classList.add("form-check")
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${uniqueCategory}">
                <label class="form-check-label" for="${uniqueCategory}">
                ${uniqueCategory}
                </label>
            `
            categoryButtons.appendChild(div)
        })
    }
    setCategories()

    let inputChecks = document.querySelectorAll(".form-check-input")

    function filterByCategory(){
        let arrayButtons = Array.from(inputChecks)
        let checked = arrayButtons.find((el) => el.checked)
        if(checked.id == "all"){
            createCards(data)
        }else{
            let filtered = data.filter((el)=> el.category == checked.id)
            createCards(filtered)
        }
    }
    inputChecks.forEach((radioButton)=>{
        radioButton.addEventListener("click",()=>{
            filterByCategory()
        })
    })
    // filtro price
    let inputPrice = document.querySelector("#inputPrice")
    let price = document.querySelector("#price")

    function minMaxPrices(){
        let prices = data.map((el)=> el.price)
        let max = Math.max(...prices)
        let min = Math.min(...prices)
        inputPrice.max = max
        inputPrice.value = max
        inputPrice.min = min
        price.innerHTML = max
    }
    minMaxPrices()

    function filterByPrice(){
        console.log(inputPrice.value);
        let filtered = data.filter((el)=> el.price = inputPrice.value).sort((a,b)=> b.price - a.price)
        price.innerHTML = inputPrice.value
        createCards(filtered)
    }
    inputPrice.addEventListener("input", ()=>{
        filterByPrice()
    })
    //search filter
    let wordInput = document.querySelector("#wordInput")

    function filterBySearch(){
        let value = wordInput.value
        let filtered = data.filter((el)=> el.name.toLowerCase().includes(value.toLowerCase()))
        createCards(filtered)
    }
    wordInput.addEventListener("input", ()=>{
        filterBySearch()
    })

})



