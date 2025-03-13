const express = require("express");
// const mainRouter = require("./src/mainRouter");
// const SwaggerConfig = require("./src/config/swagger.config");
// const cors = require("cors");
// const {
//   NotFoundHandler,
//   AllExceptionHandler,
// } = require("./src/common/util/exceptionHandler");
require("dotenv").config();
const http = require("http");
const {mainRouter} = require("./src/mainRouter");

const app = express();

// const corsOptions = {
//   origin: process.env.FRONT_URL || "http://localhost:5174",
//   methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers (if needed)
//   credentials: true, // If you're using cookies or authorization headers
// };

// app.use(cors(corsOptions));

const server = http.createServer(app);

const port = process.env.PORT||3000;
// require("./src/config/mongoos.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// SwaggerConfig(app);

app.use(mainRouter);

// NotFoundHandler(app);
// AllExceptionHandler(app);
server.listen(port, "0.0.0.0", () => {
  console.log(`connected to server On :http://127.0.0.1:${port}`);
});

module.exports = app;
