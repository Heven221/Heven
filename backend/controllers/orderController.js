import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// global varibles
const currency = 'inr'
const delivery_fee = 10



// Placing Order using COD

const placeOrder = async (req, res) => {

    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod :"COD",
            payment:false,
            date: Date.now()

        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:'Order Placed'})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        

    }

}



// placing order using stripe
const placeOrderStripe = async (req, res) => {

}

// plcing order using razorpay
const placeOrderRazorpay = async (req, res) => {

    


}

// ALL ORDERS DATA FOR ADMIN PANEL
const AllOrders = async (req, res) => {

            try {
                const orders = await orderModel.find({})
                res.json({success:true,orders})
            } catch (error) {

                console.log(error);
                res.json({success:false,message:error.message})
                
            }



}
// USER ORDER DATA FOR FRONTEND
const userOrder = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({userId}) 
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}
// Update Order Status from Admin panel
const updateStatus = async (req, res) => {

    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'Starus Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, AllOrders, userOrder, updateStatus }