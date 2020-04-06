"use strict";

import {
  getPersonData,
  getPeopleData,
  createNewPerson,
  updatePersonData,
  deletePersonData
} from "../../models/PersonModel";

const getPerson = async ({ personId, dbConnectionPool }) => {
  return await getPersonData({ personId, dbConnectionPool });
};

const getPeople = async ({ dbConnectionPool }) => {
  return await getPeopleData({ dbConnectionPool });
};

const createPerson = async ({ personData, dbConnectionPool }) => {
  return await createNewPerson({ personData, dbConnectionPool });
};

const updatePerson = async ({ personData, dbConnectionPool }) => {
  return await updatePersonData({ personData, dbConnectionPool });
};

const deletePerson = async ({ personId, dbConnectionPool }) => {
  return await deletePersonData({ personId, dbConnectionPool });
};

module.exports = {
  getPerson,
  getPeople,
  createPerson,
  updatePerson,
  deletePerson
};
