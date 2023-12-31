

const login = JSON.parse(localStorage.getItem("loginId"))
const add = JSON.parse(localStorage.getItem('add'))

if (login == null) {
    location.href = "login.html"
}

async function data() {
    const file = document.getElementById("file")
    const user = document.getElementById("name").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const phone = document.getElementById("phone").value
    const state = document.getElementById("state").value
    const city = document.getElementById("city").value
    let edit = {
        userId: "",
        name: "",
        email: "",
        address: "",
        file: "",
        phone: "",
        city: "",
        state: "",
    }
    edit = {
        userId: login.userId,
        name: user,
        email: email,
        address: address,
        phone: phone,
        city: city,
        state: state
    }
    const res = await fetch("http://localhost:3005/profile", {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(edit)
    })
    const data1 = await res.json()
    console.log(data1)
}

const getUser = async () => {
    const resuser = await fetch(`http://localhost:3005/profile/${login.userId}`, {
        headers: {
            "content-type": "application/json"
        },
        method: "GET"
    })
    const getu = await resuser.json()
    console.log(getu)
    const { name, email, address, city, phone, state } = getu
    const profile = `
    <div class="profile-box">
    <div class="box-img">
        <img class="pro-img" src="vite.svg" alt="">
        <div class="p-info">
            <h3 class="h3">${name}</h3>
            <p>${email}</p>
            <p>${phone}</p>
        </div>
    </div>
    <div class="pro-info">
        <p>${address},${city},${state}</p>
        <div class="edit flex">
            <button class="edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
                <p class="edit-p">Wishlist</p>
            </button>
            <button class="edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                    class="bi bi-pen-fill" viewBox="0 0 16 16">
                    <path
                        d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                </svg>
                <p class="edit-p">Edit</p>
            </button>
        </div>
    </div>
</div>
`

    document.getElementById("profile").innerHTML = profile
}
getUser()

const cartSum = () => {
    if (add) {
        const count = add.map(x => {
            return x.item
        })
        const sum = count.reduce((x, y) => x + y, 0)
        console.log(sum)
        document.getElementById("p").innerHTML = sum
    } else {
        document.getElementById("p").innerHTML = '0'
    }
}
cartSum()

async function q() {
    const order = await fetch(`http://localhost:3005/order/${login.userId}`, {
        headers: {
            "content-type": "application/json"
        },
        method: "GET"
    })
    const or = await order.json()
    console.log(or)
    const order2 = await fetch("http://localhost:3005/order/items/item", {
        headers: {
            "content-type": "application/json"
        },
        method: "GET"
    })
    const item = await order2.json()
    if (or != "") {
        document.getElementById("history-container").innerHTML = or.map(order => {
            const { _id, amount } = order
            const orderItem = item.filter(x => x.orderId == _id)
            //  console.log(object)
            return `<div class="history">
    <div class="loop">
        ${orderItem.map(y => {
                const { itemName, itemQty, itemImage, itemCount, price, totalPrice } = y
                return `<div class="order-item">
            <img src="../items/${itemImage}" class="or-img" alt="">
            <div class="item-detail">
                <div class="flex lead">
                    <p>${itemName}</p>
                    <p>${itemQty}</p>
                </div>
                <div class="flex lead">
                    <p>qty:${itemCount}</p>
                    <p>$${price}</p>
                </div>
                <h4>$${totalPrice}</h4>
            </div>
        </div>`
            }).join(" ")
                }
    </div>
    <div class="or-detail">
        <div class="flex lead2">
            <b>orderId</b>
            <p id="oid">${_id}</p>
        </div>
        <div class="flex lead2">
            <b>Quantity</b>
            <p>6</p>
        </div>
        <div class="flex lead2">
            <b>items</b>
            <p>2</p>
        </div>
        <div class="flex lead2">
            <b>Total</b>
            <p>$${amount}</p>
        </div>
        <div class="line"></div>
        <div class="flex">
            <h4>Order Receipt</h4><button class="edit-btn" onclick='asdf("${_id}")' id="ivb">Invoice</button>
        </div>
    </div>
</div> `
        }).join(" ")
    } else {
        document.getElementById("history-container").innerHTML = `<div class="empty-div">
    
     <h4 class="empty">you have Not Order Yet</h4></div> `
    }

}

q()

const asdf = (_id) => {

    localStorage.setItem("orderId", JSON.stringify({ orderId: _id }))
    location.href = "invoice.html"
}

const logout = () => {
    document.querySelector(".pop").innerHTML = `
    <div id="popup">
         <main>
             <p>Really,want to logout</p>
             <button onclick="closePopup()">Ok</button>
         </main>
     </div>`

}


function closePopup() {
    const pop = document.getElementById("popup")
    pop.style.display = 'none'
    localStorage.clear()
    location.href = 'login.html'
}
function tog() {
    document.getElementById("he").style.marginLeft = '-240px'
    document.getElementById("he").style.transitionDuration = '0.6s'
}
function show() {
    document.getElementById("he").style.marginLeft = '0'
    document.getElementById("he").style.transitionDuration = '0.6s'
}