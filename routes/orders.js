const express = require("express");
const router = express.Router();
const orderPageController = require("../controllers/orderingPage");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/", orderPageController.getOrder);

router.post("/createOrder", orderPageController.createOrder);

router.put("/completedOrder/:id", orderPageController.completedOrder);

module.exports = router; 