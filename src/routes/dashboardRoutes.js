const express = require("express");
//Controllers
const { dashboardController } = require("../controllers");

const dashboardRoutes = express.Router();

//Routes
dashboardRoutes.get("/dashboard", dashboardController);

module.exports = dashboardRoutes;
