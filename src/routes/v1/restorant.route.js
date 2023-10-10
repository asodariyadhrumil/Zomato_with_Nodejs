const { restorantController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");
const { restorantValidation } = require("../../validation");
const router = express.Router();

//create Restorant
router.post("/create_restorant",
upload.single("restorant_img"),
validate(restorantValidation.CreateRestorant),
restorantController.CreateRestorant
);
//Restorant list
router.get("/restorant_list",
restorantController.RestorantList
);
//Restorant id
router.get("/restorant_list/:restorantId",
restorantController.RestorantId
);
//delete Restorant
router.delete("/delete_restorant/:RestorantId",
restorantController.DeleteRestorant
);
//update Restorant
router.put("/update_restorant/:restorantId",
restorantController.UpdateRestorant
);

module.exports = router;