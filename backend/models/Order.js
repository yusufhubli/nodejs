import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"        
    },
    itemName:String,
    itemQty:String,
    category:String,
    itemCount:Number,
    price:Number,
    totalPrice:Number,
})

export const OrderItem = mongoose.model("OrderItem",orderItemSchema)

const orderschema = new mongoose.Schema({
    amount:Number,
    payment:{
        type:String,
        default:"cash on delivery"
    },
    orderDate:{
        type:Date,
        default:Date.now()
    }
})

export const Order = mongoose.model("Order",orderschema)