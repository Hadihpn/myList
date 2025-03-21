const PayehSanavatontroller = require("./payehSanavat.controller");

const router = require("express").Router();
router.post("/create", PayehSanavatontroller.create);
router.get("/getAll", PayehSanavatontroller.getAll);
router.get("/getByYear/:year", PayehSanavatontroller.getByYear);
router.get("/getById/:id", PayehSanavatontroller.getById);
router.patch("/update/:id", PayehSanavatontroller.update);
router.patch("/updatePrice", PayehSanavatontroller.updatePrice);
router.delete("/delete/:id", PayehSanavatontroller.delete);
module.exports = {
  PayehSanavatRoutes: router,
};
