
const SenfController = require("./senf.controller");
const router = require("express").Router();

// CRUD Routes
router.post("/create", SenfController.create);
router.get("/getAll", SenfController.find);
router.get("/getById/:id", SenfController.findById);
router.patch("/update/:id", SenfController.update);
router.delete("/delete/:id", SenfController.delete);

// Job Management Routes
router.patch("/addJob/:senfId/:jobId", SenfController.addJob);
router.patch("/removeJob/:senfId/:jobId", SenfController.removeJob);

module.exports = {
  SenfRoutes: router,
};
