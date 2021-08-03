require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "./public/data/uploads/" });

// Basic Configuration
const { DEFAULT_PORT } = require("./utils/constants");

// Controllers
const file_controller = require("./domains/file/file.controller");

app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use("/public", express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// info page
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// file endpoints
app.post("/api/fileanalyse", upload.single("upfile"), file_controller.upload);

const listener = app.listen(DEFAULT_PORT || process.env.PORT, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
