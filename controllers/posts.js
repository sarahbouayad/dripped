const Post = require("../models/Post");
const Order = require("../models/Order");
const ObjectId = require('mongoose').ObjectID

module.exports = {
  getProfile: async (req, res) => {
    try {
      const orders = await Order.find();
      res.render("profile.ejs",{user:req.user, orders: orders});
    } catch (err) {
      console.log(err);
    }
  },

  likePost: async (req, res) => {
    try {
      await Order.findOneAndUpdate(
        { _id: new ObjectId(req.params.id) },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Completed");
      res.redirect(`/profile/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};

