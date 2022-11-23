const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
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
    square: {
        type: String,
        required: false,
      },
    orderFulfilled: {
        type: Date, 
        required: false,  
        default: null, 
    }, 
    fulFilledBy: {
        type: String, 
        required: false,  
        default: null,
    }
})

module.exports = mongoose.model("Order", OrderSchema);
