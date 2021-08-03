var express = require("express");
var cors = require("cors");
require("dotenv").config();

var app = express();

// Controllers
const file_controller = require("./domains/file/file.controller");

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

// info page
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// file endpoints
app.post("/api/fileanalyse", file_controller.upload);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
