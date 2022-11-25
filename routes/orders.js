const express = require("express");
const router = express.Router();
const orderPageController = require("../controllers/orderPage");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/:id", orderPageController.getOrder);

router.get("/profile", ensureAuth, orderPageController.getProfile);

router.post("/createOrder", orderPageController.createOrder);

router.put("/completedOrder/:id", orderPageController.completedOrder);

router.delete("/deleteFulfilledOrder/:id", orderPageController.deleteFulfilledOrder); 

module.exports = router;  