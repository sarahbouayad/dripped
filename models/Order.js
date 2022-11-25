const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: false, 
    },
    size: {
        type: String,
        required: false, 
    },
    coffeeType: {
        type: String,
        required: false, 
    },
    milkOptions: {
        type: String,
        required: false, 
    },
    flavorShot: {
        type: String,
        required: false,  
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    orderStatus: {
        type: String,
        required: true,
        default:'pending'
    },
    baristaName: {
        type: String, 
        required: false, 
        default: ""
    }
})

module.exports = mongoose.model("Order", OrderSchema);
