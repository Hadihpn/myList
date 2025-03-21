const sanavatController = require("./sanavat.controller");

const router = require("express").Router();
router.post("/create", sanavatController.create);
router.get("/getAll", sanavatController.getAll);
router.get("/getByYear/:year", sanavatController.getByYear);
router.get("/getById/:id", sanavatController.getById);
router.patch("/update/:id", sanavatController.update);
router.patch("/updatePrice", sanavatController.updatePrice);
router.delete("/delete/:id", sanavatController.delete);
module.exports = {
  SanavatRoutes: router,
};
