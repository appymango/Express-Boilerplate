const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { log } = require("./config");
// ENV's
const { API_ROUTE } = process.env;
//Error
const { CustomError } = require("./errors");

//Middlewares
const { morganMiddleware } = require("./middlewares");

//Routes
const { dashboardRoutes } = require("./routes");

const app = express();
// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//External
app.use(cookieParser());
//Logger
app.use(morganMiddleware);

//------------------------------------------------------------------
//MARK: Routes Handling
//------------------------------------------------------------------

//Common Routes
app.use(API_ROUTE, dashboardRoutes);

//Unsupported Routes
app.use((req, res, next) => {
  const error = new CustomError("Route not found", 404);
  throw error;
});

//Error Boundary
app.use((error, req, res, next) => {
  log.error("Error Boundary", error.message);

  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error occured" });
});

module.exports = app;
