const { JobRoutes } = require("./modules/job/job.routes");
const { PayehSanavatRoutes } = require("./modules/payehSanavat/payehSanavat.routes");
const { SanavatRoutes } = require("./modules/sanavat/sanavat.routes");
const { SenfRoutes } = require("./modules/senf/senf.routes");
const { UserRoutes } = require("./modules/user/user.routes");

const router = require("express").Router();
router.use("/job",JobRoutes)
router.use("/payehSanavat",PayehSanavatRoutes)
router.use("/user",UserRoutes)
router.use("/sanavat",SanavatRoutes)
router.use("/senf",SenfRoutes)
module.exports = {
  mainRouter: router,
};
