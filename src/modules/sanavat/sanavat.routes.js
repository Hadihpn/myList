const SanavatController = require("./sanavat.controller");

const router = require("express").Router();
router.post("/create", SanavatController.create);
router.get("/getAll", SanavatController.getAll);
router.get("/getByYear/:year", SanavatController.getByYear);
router.get("/getById/:id", SanavatController.getById);
router.patch("/update/:id", SanavatController.update);
router.patch("/updatePrice", SanavatController.updatePrice);
router.delete("/delete/:id", SanavatController.delete);
module.exports = {
  SanavatRoutes: router,
};
