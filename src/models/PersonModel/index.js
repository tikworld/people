"use strict";

// Get all people.
const getPeopleData = async ({ dbConnectionPool }) =>
  new Promise((resolve, reject) => {
    dbConnectionPool.query(`SELECT * FROM Person`, (error, result, fields) => {
      if (error) reject(error);
      resolve(result);
    });
  });

// Get the person based on the passed person's id
const getPersonData = async ({ personId, dbConnectionPool }) =>
  new Promise((resolve, reject) => {
    dbConnectionPool.query(
      `SELECT * FROM Person WHERE personId = ${personId}`,
      (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
        // Do something with result.
      }
    );
  });

// Create a new person.
const createNewPerson = async ({ personData, dbConnectionPool }) =>
  new Promise((resolve, reject) => {
    dbConnectionPool.query(
      `INSERT INTO Person (FirstName, MiddleInitial, LastName, GovernmentId) VALUES ?`,
      [[Object.values(personData)]],
      (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      }
    );
  });

// Update a person's information.
const updatePersonData = async ({ personData, dbConnectionPool }) =>
  new Promise((resolve, reject) => {
    const { PersonId, ...restOfPersonData } = personData;

    dbConnectionPool.query(
      `UPDATE Person
      SET 
        FirstName = ?,
        MiddleInitial = ?,
        LastName = ?,
        GovernmentId = ?
      WHERE PersonId = ${PersonId}`,
      Object.values(restOfPersonData),
      function(error, result, fields) {
        if (error) reject(error);
        resolve(result);
      }
    );
  });

const deletePersonData = async ({ personId, dbConnectionPool }) =>
  new Promise((resolve, reject) => {
    dbConnectionPool.query(
      `DELETE 
      FROM Person 
      WHERE personId = ${personId}`,
      function(error, result, fields) {
        if (error) reject(error);
        resolve(result);
      }
    );
  });

module.exports = {
  getPersonData,
  getPeopleData,
  createNewPerson,
  updatePersonData,
  deletePersonData
};
