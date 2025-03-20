const { JobRoutes } = require("./modules/job/job.routes");
const { SanavatRoutes } = require("./modules/sanavat/sanavat.routes");

const router = require("express").Router();
router.use("/job",JobRoutes)
router.use("/sanavat",SanavatRoutes)
module.exports = {
  mainRouter: router,
};
