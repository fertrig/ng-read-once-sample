"use strict";

var express = require("express"),
	bodyParser = require("body-parser"),
	routes = require("./routes");

var app = express();

app.use(bodyParser());
app.use(express.static("client"));

if (process.env.NODE_ENV !== "development") {
	app.enable("trust proxy");
}

app.use("/", routes.router);

app.listen(process.env.PORT || 3131, function() {
	console.log("Web server listening at port %s", process.env.PORT || 3131);
});