const express = require("express");
const { createUser, updateUser, login } = require("../controller/userController");

const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/:_id").put(updateUser);

module.exports = router;