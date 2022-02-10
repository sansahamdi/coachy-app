const express = require("express");
const router = express.Router();
const {
  findAllUsers,
  createUser,
  updateUser,
  deleteOneUser,
  findOneUser,
  loginUser,
} = require("../controllers/userController");
const { validation, login } = require("../middleware/validation");

router.get("/users", findAllUsers).get("/user/:id", findOneUser);
router
  .post("/user", createUser)
  .post("/user/login", login(), validation, loginUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteOneUser);

module.exports = router;
