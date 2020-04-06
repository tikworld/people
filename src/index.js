"use strict";

import express from "express";
import config from "./configs";
import loaders from "./loaders";

(async () => {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is running on port: ${config.port} !`);
  });
})();
