const { JobRoutes } = require("./modules/job/job.routes");
const { PayehSanavatRoutes } = require("./modules/payehSanavat/payehSanavat.routes");
const { SanavatRoutes } = require("./modules/sanavat/sanavat.routes");
const { UserRoutes } = require("./modules/user/user.routes");

const router = require("express").Router();
router.use("/job",JobRoutes)
router.use("/payehSanavat",PayehSanavatRoutes)
router.use("/user",UserRoutes)
router.use("/sanavat",SanavatRoutes)
module.exports = {
  mainRouter: router,
};
