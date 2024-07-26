const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth_controller");

const {signupSchema,loginSchema } = require("../validators/auth_validators");
const validate = require("../middlewares/validate_middleware");
const authMiddleware  = require("../middlewares/auth_middleware")

router.route("/").get(authcontrollers.home);

router
.route("/register")
.post(validate(signupSchema),authcontrollers.register);

router
.route("/login")
.post(validate(loginSchema),authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);
module.exports = router;