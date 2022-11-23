const Order = require("../models/Order");

module.exports = {
  getOrder: async (req, res) => {
    try {
      const orders = await Order.find({ name: req.body.name });

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
  createOrder: async (req, res) => {
    console.log("order was created");
    try {
      await Order.create({
        name: req.body.name,
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
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { 
            square: !req.body.square,
          },
        }
      );
      console.log("completed");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },




};
