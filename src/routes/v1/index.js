const express = require("express");

const categories = require("./categories.route");
const city = require("./city.route");
const foodGallary = require("./foodGallary.route");
const orderDetails = require("./orderDetails.route");
const orderItems = require("./orderItems.route");
const login = require("./login.router");
const ownerDetails = require("./ownerDetails.route");
const paymentMethod = require("./paymentMethod.route");
const restorant = require("./restorant.route");
const restorant_type = require("./restorant_type.route");
const reviews = require("./reviews.route");
const state = require("./state.route");
const user = require("./user.route");
const token =require("./token.route")

const router = express.Router();

router.use("/categories", categories);
router.use("/city", city);
router.use("/foodGallary", foodGallary);
router.use("/orderDetails", orderDetails);
router.use("/user", user);
router.use("/orderItems",orderItems);
router.use("/login", login);
router.use("/ownerDetails", ownerDetails);
router.use("/paymentMethod", paymentMethod);
router.use("/restorant_type", restorant_type);
router.use("/restorant", restorant);
router.use("/reviews", reviews);
router.use("/state", state);
router.use('/token', token);

module.exports = router;