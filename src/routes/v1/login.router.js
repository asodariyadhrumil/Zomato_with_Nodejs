const { loginController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")
const { loginValidation } = require("../../validation");
const router = express.Router();

//create Login
router.post("/create_login",
    validate(loginValidation.CreateLogin),
    auth(),
    loginController.CreateLogin
);
//login list
router.get("/login_list",
loginController.LoginList
);
//login id
router.get("/login_list/:loginId",
loginController.LoginId
);
//delete login
router.delete("/delete_login/:loginId",
    loginController.DeleteLogin
);
//update login
router.put("/update_login/:loginId",
loginController.UpdateLogin
);

module.exports = router;