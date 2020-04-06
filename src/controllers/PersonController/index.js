"use strict";

import { Router } from "express";

import {
  getPerson,
  getPeople,
  createPerson,
  updatePerson,
  deletePerson
} from "../../services/PersonService";

const route = Router();

// export default ({ app }) => {
const PersonController = (app, dbConnectionPool) => {
  // Set the base URI to /people.
  app.use("/people", route);

  // Get all individuals and their respective information.
  route.get("/", async (req, res, next) => {
    return res.send(await getPeople({ dbConnectionPool }));
  });

  // Get an individual based on the passed person id.
  route.get("/:personId", async (req, res, next) => {
    return res.send(
      await getPerson({ personId: req.params.personId, dbConnectionPool })
    );
  });

  // Create a person based on the request's information.
  route.post("/", async (req, res, next) => {
    return res.send(
      await createPerson({ personData: req.body, dbConnectionPool })
    );
  });

  // Update a person's information based on the passed in PersonId.
  route.put("/", async (req, res, next) => {
    return res.send(
      await updatePerson({ personData: req.body, dbConnectionPool })
    );
  });

  // Delete a person based on the person's id.
  route.delete("/:personId", async (req, res, next) => {
    return res.send(
      await deletePerson({ personId: req.params.personId, dbConnectionPool })
    );
  });
};

export default PersonController;
