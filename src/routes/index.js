"use strict";

import { Router } from "express";
import people from "../controllers/PersonController";
import geoLocation from "../controllers/GeoLocationController";

// guaranteed to get dependencies
// const router = ({ dbConnectionPool }) => {
const router = dbConnectionPool => {
  const app = Router();

  people(app, dbConnectionPool);
  geoLocation(app, dbConnectionPool);
  // agendash(app);

  return app;
};

export default router;
