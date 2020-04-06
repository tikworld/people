"use strict";

import express from "express";
import cors from "cors";
import routes from "../../routes";
import config from "../../configs";

const expressLoader = ({ app, dbConnectionPool }) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy"); // It shows the real origin IP in the heroku or Cloudwatch logs

  app.use(cors()); // Enable Cross Origin Resource Sharing to all origins by default

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Load API routes
  // app.use(config.api.prefix, routes({ dbConnectionPool }));
  app.use(config.api.prefix, routes(dbConnectionPool));

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });
};

export default expressLoader;
