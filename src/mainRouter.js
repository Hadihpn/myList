const { JobRoutes } = require("./modules/job/job.routes");

const router = require("express").Router();
router.use("/job",JobRoutes)
module.exports = {
  mainRouter: router,
};
