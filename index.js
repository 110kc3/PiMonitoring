var express = require("express");
var path = require("path");

var app = express();

var port = 80;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Getting css file
//app.use('/views/css',express.static(__dirname + '/views/css'));
app.use(express.static(path.join(__dirname, "views")));

// used to parse request body
app.use(express.json());

//Getting html file
app.get("/", function (req, resp) {
  resp.sendFile("index.html", { root: path.join(__dirname, "./views") });
});

//bootstrap usage?
//app.use('/views/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
require("dns").lookup(require("os").hostname(), function (err, localhost, fam) {
  console.log("addr: " + localhost);
});

//Listening on port
//opening on phone/laptop - 192.168.1.61:80 - device ipv4 address
app.listen(port, "192.168.0.21", function () {
  console.log("Application worker " + process.pid + " started...");
});
