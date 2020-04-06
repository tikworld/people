"use strict";

import { Router } from "express";

import {
  getAddress,
  getAddressByCoordinates,
  createAddress,
  updateAddress,
  deleteAddress
} from "../../services/GeoLocationService";

const route = Router();

// export default ({ app }) => {
const GeoLocationController = (app, dbConnectionPool) => {
  // Set the base URI to /people.
  app.use("/geolocations", route);

  // Get all individuals and their respective information.
  route.get("/", async (req, res, next) => {
    return res.send(await getAddress({ dbConnectionPool }));
  });

  // Get an individual based on the passed person id.
  route.get("/:personId", async (req, res, next) => {
    return res.send(
      await getAddressByCoordinates({
        personId: req.params.personId,
        dbConnectionPool
      })
    );
  });

  // Create a person based on the request's information.
  route.post("/", async (req, res, next) => {
    return res.send(
      await createAddress({ personData: req.body, dbConnectionPool })
    );
  });

  // Update a person's information based on the passed in PersonId.
  route.put("/", async (req, res, next) => {
    return res.send(
      await updateAddress({ personData: req.body, dbConnectionPool })
    );
  });

  // Delete a person based on the person's id.
  route.delete("/:personId", async (req, res, next) => {
    return res.send(
      await deleteAddress({ personId: req.params.personId, dbConnectionPool })
    );
  });
};

export default GeoLocationController;
