"use strict";
exports.__esModule = true;
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var http = require("http");
var https = require("https");
var app = express();
// Port
var HTTP_PORT = process.env.HTTP_PORT || 3080;
var HTTPS_PORT = process.env.HTTPS_PORT || 3443;
// Middleware setup
app.use(morgan("dev"));
app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());
// Router endpoint
// app.use('/api', routerApi);
// Server connectivity test page
app.get("/", function (req, res) {
    res.send("<h1>TODO API</h1>");
});
http.createServer(app).listen(HTTP_PORT, function () {
    console.log("http server started on " + HTTP_PORT);
});
https.createServer(app).listen(HTTPS_PORT, function () {
    console.log("https server started on " + HTTPS_PORT);
});
