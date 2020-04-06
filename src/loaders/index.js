"use strict";

import expressLoader from "./ExpressLoader";
import mySqlLoader from "./MySqlLoader";

const Loaders = async ({ expressApp }) => {
  // Load the mySQL database loader.
  const dbConnectionPool = await mySqlLoader;

  // Load the Express server and routes.
  await expressLoader({ app: expressApp, dbConnectionPool });

  // ... Initialize agenda
  // ... or Redis, or whatever you want
};

export default Loaders;
