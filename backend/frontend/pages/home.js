const items = JSON.parse(localStorage.getItem("items"))
const add = JSON.parse(localStorage.getItem("add"))
const login = JSON.parse(localStorage.getItem("loginId"))

if(login == null){
location.href = "login.html"
}

const container = document.getElementById("veg")
const container2 = document.getElementById("fru")
const container3 = document.getElementById("dry")
const container4 = document.getElementById("rice")
const container5 = document.getElementById("snack")

const veg = items.filter(x=>x.category == "vegetables")
const fruit = items.filter(x=>x.category == "fruits")
const dry = items.filter(x=>x.category == "dryfruits")
const rice = items.filter(x=>x.category == "ricemeals")
const snack = items.filter(x=>x.category == "snacksbiscuits")
// console.log(veg)
container.innerHTML = veg.map(x=>{
    const {itemId,itemName,itemImage,price,itemQty} =x
    return `
    <div class="item" key=${itemId}>
    <div class="img-container"><img class="item-img" src="../items/${itemImage}" alt=""></div>
    <h3 class="item-name">${itemName}<span></span></h3>
    <p class="item-qty">${itemQty}</p>
    <div class="contain">
        <h2 class="item-price">$${price}</h2>
        <Button class="add-cart" onclick='addToCart(${itemId})'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p>Add</p>
        </Button>
    </div>
</div>`
}) 


container2.innerHTML = fruit.map(x=>{
    const {itemId,itemName,itemImage,price,itemQty} =x
    return `
    <div class="item" key=${itemId}>
    <div class="img-container"><img class="item-img" src="../items/${itemImage}" alt=""></div>
    <h3 class="item-name">${itemName}<span></span></h3>
    <p class="item-qty">${itemQty}</p>
    <div class="contain">
        <h2 class="item-price">$${price}</h2>
        <Button class="add-cart" onclick='addToCart(${itemId})'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p>Add</p>
        </Button>
    </div>
</div>`
}) 

container3.innerHTML = dry.map(x=>{
    const {itemId,itemName,itemImage,price,itemQty} =x
    return `
    <div class="item" key=${itemId}>
    <div class="img-container"><img class="item-img" src="../items/${itemImage}" alt=""></div>
    <h3 class="item-name">${itemName}<span></span></h3>
    <p class="item-qty">${itemQty}</p>
    <div class="contain">
        <h2 class="item-price">$${price}</h2>
        <Button class="add-cart" onclick='addToCart(${itemId})'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p>Add</p>
        </Button>
    </div>
</div>`
}) 


container4.innerHTML = rice.map(x=>{
    const {itemId,itemName,itemImage,price,itemQty} =x
    return `
    <div class="item" key=${itemId}>
    <div class="img-container"><img class="item-img" src="../items/${itemImage}" alt=""></div>
    <h3 class="item-name">${itemName}<span></span></h3>
    <p class="item-qty">${itemQty}</p>
    <div class="contain">
        <h2 class="item-price">$${price}</h2>
        <Button class="add-cart" onclick='addToCart(${itemId})'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p>Add</p>
        </Button>
    </div>
</div>`
}) 


container5.innerHTML = snack.map(x=>{
    const {itemId,itemName,itemImage,price,itemQty} =x
    return `
    <div class="item" key=${itemId}>
    <div class="img-container"><img class="item-img" src="../items/${itemImage}" alt=""></div>
    <h3 class="item-name">${itemName}<span></span></h3>
    <p class="item-qty">${itemQty}</p>
    <div class="contain">
        <h2 class="item-price">$${price}</h2>
        <Button class="add-cart" onclick='addToCart(${itemId})'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p>Add</p>
        </Button>
    </div>
</div>`
}) 

const addToCart = (items)=>{
    //let cartitem = document.getElementById(cart)
    console.log(items)
    let search = add.find((x) => x.id === items)
    if (search === undefined) {
        add.push({
            id:items,
            item: 1,
        })
        alert(`<b>Added to Cart</b>`)
    } else {
        search.item = 1
    }
    localStorage.setItem("add", JSON.stringify(add))
}
const cartSum = () => {
    if(add){
    const count = add.map(x => {
        return x.item
    })
    const sum = count.reduce((x, y) => x + y, 0)
    console.log(sum)
    document.getElementById("p").innerHTML = sum
}else{
    document.getElementById("p").innerHTML = '0'
}
}
  cartSum()


  const logout = ()=>{
    document.querySelector(".pop").innerHTML = `
    <div id="popup">
         <main>
             <p>Really,want to logout</p>
             <button onclick="closePopup()">Ok</button>
         </main>
     </div>`
   
 }
  function closePopup(){
    const pop = document.getElementById("popup")
    pop.style.display = 'none'
   localStorage.clear()
    location.href = 'login.html'
    }
  function tog(){
    document.getElementById("he").style.marginLeft = '-240px'
    document.getElementById("he").style.transitionDuration = '0.6s'
    }
    function show(){
      document.getElementById("he").style.marginLeft = '0'
      document.getElementById("he").style.transitionDuration = '0.6s'
      }