const Order = require("../models/Order");
const ObjectId = require('mongoose').ObjectID

module.exports = {
  getProfile: async (req, res) => {
    try {
      // All unfulfilled orders will have a 'pending' status.
      const orders = await Order.find({ orderStatus: "pending" });
      // Find all the completed orders
      const completedOrder = await Order.find({ orderStatus: "completed" });
      // sending the unfullfilled and fulfilled orders to the ejs to create ejs
      res.render("profile.ejs",{user:req.user, orders: orders, completedOrder: completedOrder});
    } catch (err) {
      console.log(err);
    }
  },
  getOrder: async (req, res) => {
    try {
      // this is the order schema for post for the order page ejs
      const orders = await Order.find({ clientName: req.body.clientName });
      
      // objs from data base, located in Order schema. rendering on order ejs
      res.render("order.ejs", { 
        order: req.body.order,
        size: req.body.size,
        coffeeType: req.body.coffeeType,
        milkOptions: req.body.milkOptions,
        flavorShot: req.body.flavorShot,
       });
    } catch (err) {
      console.log(err);
    }
  },
  // post to create order from order.ejs from form 
  createOrder: async (req, res) => {
    console.log("order was created");
    try {
      await Order.create({
        clientName: req.body.clientName,
        order: req.body.order,
        size: req.body.size,
        coffeeType: req.body.coffeeType,
        milkOptions: req.body.milkOptions,
        flavorShot: req.body.flavorShot,
      });
      console.log("order has been added!");
      res.redirect('/');

    } catch (err) {
      console.log(err);
    }
  },
  completedOrder: async (req, res) => {
    // will go into orders collection find an unfulfilled id that will match the id sent. 
    // this is the put method 
    try {
      await Order.findOneAndUpdate(
        { _id: req.params.id },
        {
         orderStatus: "completed", 
         baristaName: req.user.userName 
        //  when barista fulfills order, this will take their name and attach it to the order id
        }
      );
      console.log("completed");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  deleteFulfilledOrder: async (req, res) => {

    try {

      await Order.remove({ _id: req.params.id });

      console.log("completed");
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },

};
