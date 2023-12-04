const items = JSON.parse(localStorage.getItem("items")) || []
const add = JSON.parse(localStorage.getItem("add")) || []

const cartSum =()=>{
    const count = add.map(x => {
      return x.item
    })
  const sum = count.reduce((x, y) => x + y, 0)
  console.log(sum)
  document.getElementById("p").innerHTML = sum
  }
  cartSum()

const getItem = async () => {
    const res = await fetch('http://localhost:3005/items', {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            //  return data
            localStorage.setItem("items", JSON.stringify(data))
        })
    return res
}
getItem()


const category = ()=>{
       const one = document.getElementById('one').dataset.id
       const cate = items.filter((items) => items.category == one) 
       cateItems(cate)   
       location.href ='category.html'
       }
       
       const category1 = ()=>{
        const one = document.getElementById('two').dataset.id
        const cate = items.filter((items) => items.category == one) 
        cateItems(cate)   
        }
        const category2 = ()=>{
            const one = document.getElementById('thr').dataset.id
            const cate = items.filter((items) => items.category == one) 
            cateItems(cate)   
            }
            const category3 = ()=>{
                const one = document.getElementById('fou').dataset.id
                const cate = items.filter((items) => items.category == one) 
                cateItems(cate)   
                }
                const category4 = ()=>{
                    const one = document.getElementById('fiv').dataset.id
                    const cate = items.filter((items) => items.category == one) 
                    cateItems(cate)   
                    }
       

const cateItems = (item)=>{
    const product = item.map(items => {
const { _id,itemId, itemName, itemImage, itemQty, price, category } = items
    return `
    <div class="item" key=${_id}>
         <div class="img-container"><img class="item-img" src="../items/${itemImage}" alt=""></div>
               <h3 class="item-name">${itemName}<span></span></h3>
               <p class="item-qty">${itemQty}</p>
               <div class="contain">
                   <h2 class="item-price">$${price}</h2>
                   <Button class="add-cart" onclick='addToCart(${itemId})'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                       </svg>
                       <p>Add</p>
                   </Button>
               </div>
           </div>
       </div>`
    }).join(" ")
    document.getElementById('items').innerHTML = product
}



const one = document.getElementById('one').dataset.id
const cate = items.filter((items) => items.category == one) 
cateItems(cate) 

const addToCart = (items)=>{
    //let cartitem = document.getElementById(cart)
    console.log(items)
    let search = add.find((x) => x.id === items)
    if (search === undefined) {
        add.push({
            id:items,
            item: 1,
        })
       
    } else {
        search.item = 1
    }
    localStorage.setItem("add", JSON.stringify(add))
}

const logout = ()=>{
    localStorage.clear()
    location.href = 'login.html'
  }