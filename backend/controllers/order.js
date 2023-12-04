import { OrderItem } from "../models/Order.js";

export const addItems = (req,res)=>{
    try {
        const body = req.body
        console.log(body.length)
         const o = body[0].map(x=>{
            console.log(i)
            let {itemName,itemQty,price,category} = x[0]
            let{count} = x[1]
            console.log(count)
            tot = price*count
            console.log(tot)
          const d = OrderItem.create({itemName:itemName,itemQty:itemQty,category:category,itemCount:count,totalPrice:tot})
          d.save()
          console.log(d)
        })
        console.log(o)
        res.status(200).json({message:"updated"})
    } catch (error) {
        res.status(400).json(error)
    }
}