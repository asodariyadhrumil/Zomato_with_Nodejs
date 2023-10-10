const { restorant_typeController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { restorant_typeValidation } = require("../../validation");
const router = express.Router();

//create Restorant_type
router.post("/create_restorant_type",
    validate(restorant_typeValidation.CreateRestorant_type),
    restorant_typeController.CreateRestorant_type
);
//Restorant_type list
router.get("/restorant_type_list",
restorant_typeController.Restorant_typeList
);
//Restorant_type id
router.get("/restorant_type_list/:typeId",
restorant_typeController.Restorant_typeId
);
//delete Restorant_type
router.delete("/delete_restorant_type/:typeId",
restorant_typeController.DeleteRestorant_type
);
//update Restorant_type
router.put("/update_restorant_type/:typeId",
restorant_typeController.UpdateRestorant_type
);

module.exports = router;