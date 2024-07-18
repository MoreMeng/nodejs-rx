const express = require("express");
const morgan = require("morgan");

const app = express();

module.exports = () => {
  app.use(morgan("dev"));

  app.use(express.json());

  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use((req, res, next) => {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
    );
    next();
  });
  return app;
};
