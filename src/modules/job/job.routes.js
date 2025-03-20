const JobController = require("./job.controller");

const router = require("express").Router();
router.post("/create", JobController.create);
router.get("/getAll", JobController.getAll);
router.get("/getByTitle/:title", JobController.getByTitle);
router.get("/getById/:id", JobController.getById);
router.patch("/update/:id", JobController.update);
router.patch("/updatePrice", JobController.updatePrice);
router.delete("/delete/:id", JobController.delete);
module.exports = {
  JobRoutes: router,
};
