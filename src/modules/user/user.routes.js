const UserController = require("./user.controller");

const router = require("express").Router();
router.post("/create", UserController.create);
router.get("/getAll", UserController.find);
router.get("/getById/:id", UserController.findById);
router.patch("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);
module.exports = {
  UserRoutes: router,
};
