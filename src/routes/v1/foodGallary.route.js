const express = require("express");
const router = express.Router();
const { foodDetailsValidation } = require("../../validation");
const { foodDetailsController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload")

// Create foodDetails

router.post(
    "/create-foodDetails",
    upload.single("Food_img"),
    validate(foodDetailsValidation.createFoodDetails),
    foodDetailsController.createFoodDetails
);

// List foodDetails
router.get(
    "/list-foodDetails",
    validate(foodDetailsValidation.listfoodDetails),
    foodDetailsController.listfoodDetails
);

// Delete foodDetails
router.delete(
    "/delete-foodDetails/:Id",
    foodDetailsController.deletefoodDetails
);

// Update foodDetails
router.put(
    "/update-foodDetails/:id",
    foodDetailsController.updatefoodDetails
);

module.exports = router;