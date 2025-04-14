const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { config } = require("./config");
const router = require("./router/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use(router);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
