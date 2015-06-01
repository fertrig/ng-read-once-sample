"use strict";

var express = require("express");

var router = express.Router();

router.get("/", function(req, res, next) {
	res.sendFile("/client/app/index.html", { root: process.cwd() });
});

router.get("/ping", function(req, res, next) {
	res.json({
		answer: "pong"
	});
});

router.post("/teams", function(req, res, next) {

	var teams = [
		{
			id: 1,
			name: "Red",
			captain: "John Marks"
		},
		{
			id: 2,
			name: "Blue",
			captain: "Mary Stevens"
		},
		{
			id: 3,
			name: "Yellow",
			captain: "Carl Zolab"
		}
	];

	res.json(teams);
});

exports.router = router;