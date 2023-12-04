const add = JSON.parse(localStorage.getItem('add')) || []
const items = JSON.parse(localStorage.getItem('items')) || []



const cartSum =()=>{
  const count = add.map(x => {
    return x.item
  })
const sum = count.reduce((x, y) => x + y, 0)
console.log(sum)
document.getElementById("p").innerHTML = sum
}
cartSum()
let increase = (id) => {
  let selecteditem = document.getElementById(id)
  // console.log(selecteditem.id)
  let search = add.find((x) => x.id == selecteditem.id)
  if (search != undefined) {
    search.item += 1
  }
  update(selecteditem)
  localStorage.setItem("add", JSON.stringify(add))
  
}

let decrease = (id) => {
  let selecteditem = document.getElementById(id)
  let search = add.find((x) => x.id == selecteditem.id)
  console.log(search)
  if (search.item == 1) return
  else {
    search.item -= 1
  }
  update(selecteditem)
  localStorage.setItem("add", JSON.stringify(add))
}
let update = (id) => {
  //console.log(id)
  let search = add.find((x) => x.id == id.id)
  console.log(search)
  id.innerHTML = search.item
  let amount = add.map((x) => {
    // console.log(x)
    let { id, item } = x
    let search = items.find((y) => y.itemId == id)
    //console.log(search)
    return item * search.price
  }).reduce((x, y) => x + y, 0)
  cartSum()
  document.getElementById("cart").innerHTML = `
<div class="details">
              <div class="total flex">
                 <h2>Total Cost:<span>$${amount > 500 ? amount : amount + 20}</span></h2>
                 <button class="checkout" onclick="toggle()">Checkout</button>
              </div>
              <div class="cart-detail">
                <h3 class="heading">Order Details</h3>
                <div class="line"></div>
                <div class=" flex detail-item"><p>Price</p><p>$${amount}</p></div>
                <div class=" flex detail-item"><p>Discount</p><p>$0</p></div>
                <div class=" flex detail-item"><p>Delivery Charges</p><p>$${amount > 500 ? 0 : 20}</p></div>
                <div class=" flex detail-item"><p>You Saved</p><p>$0</p></div>
                <div class="line"></div>
                <div class=" flex detail-item"><p>Total</p><p id='total'>$${amount > 500 ? amount : amount + 20}</p></div>
              </div>
            </div> `

}

let Delete = (id) => {
  let selected = document.getElementById(id)
  console.log(selected.id)
  deladd = add.filter((x) => x.id != selected.id)
  localStorage.setItem("add", JSON.stringify(deladd))
}

const addCart = (add) => {
  //const add = JSON.parse(localStorage.getItem('add')) || []
  const cart = add.map(ad => {
    const { id, item } = ad
    const search = items.find(x => x.itemId == id)
    const { itemName, itemImage, itemQty, price, itemId } = search
    return `
          <div key=${itemId} class="cart-box">
          <div class="img-box">
              <img class="cart-img" src="../items/${itemImage}" alt="">
          </div>
          <div class="cart-text">
              <h1 class="cart-name">${itemName}</h1>
              <p class="cart-qty">${itemQty}</p>
              <p class="cart-price">$${price}</p>
              <div class="flex cart-inde">
                  <div class="flex in-de">
                      <div class="one" onclick="decrease(${id})">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg></div>
                      <div class="two" id=${id}>${item}</div>
                      <div class="three" onclick="increase(${id})">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg></div>
                  </div>
                  <button class="remove" onclick="Delete(${id})">Remove</button>
              </div>
          </div>
      </div>`
  }).join(" ")
  //console.log(cart)
  document.getElementById("cart-it").innerHTML = cart
}
addCart(add)

let amount = add.map((x) => {
  // console.log(x)
  let { id, item } = x
  let search = items.find((y) => y.itemId == id)
  //console.log(search)
  return item * search.price
}).reduce((x, y) => x + y, 0)



document.getElementById("cart").innerHTML = `
<div class="details">
              <div class="total flex">
                 <h2>Total Cost:<span>$${amount > 500 ? amount : amount + 20}</span></h2>
                 <button class="checkout" onclick="toggle()">Checkout</button>
              </div>
              <div class="cart-detail">
                <h3 class="heading">Order Details</h3>
                <div class="line"></div>
                <div class=" flex detail-item"><p>Price</p><p>$${amount}</p></div>
                <div class=" flex detail-item"><p>Discount</p><p>$0</p></div>
                <div class=" flex detail-item"><p>Delivery Charges</p><p>$${amount > 500 ? 0 : 20}</p></div>
                <div class=" flex detail-item"><p>You Saved</p><p>$0</p></div>
                <div class="line"></div>
                <div class=" flex detail-item"><p>Total</p><p id='total'>$${amount > 500 ? amount : amount + 20}</p></div>
              </div>
            </div> `


const cart = add.map(x=>{
  const {id,item} = x
  const fil = items.filter(y=>y.itemId == id )
  return [fil[0],{count:item}]
})
console.log(cart)

const tot = document.getElementById("total").textContent
console.log(tot.split("$")[1])

const toggle = ()=>{
  const model = document.getElementById("model")
  model.classList.add("a")
  model.classList.remove("model")
  console.log(model)
}

const order = async()=>{
  const res = await fetch("http://localhost:3005/order/items",{
    headers:{
      "content-type":"application/json"
    },
    method:"POST",
    body:JSON.stringify(cart)
  })
  const r = await res.json()
  console.log(r)
}

const logout = ()=>{
  localStorage.removeItem("loginId")
  location.href = 'login.html'
}