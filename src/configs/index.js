import dotenv from "dotenv/config";

// Set the ENVIRONMENT varialbe to 'development' by default
process.env.ENVIRONMENT = process.env.ENVIRONMENT || "development";

// Check to make sure the .env file was found or throw an error.
if (!dotenv) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT, 10), // Server port
  jwtSecret: process.env.JWT_SECRET, // Json web token

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  },

  /**
   * Agenda.js stuff
   */
  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10)
  },

  /**
   * Agendash config
   */
  agendash: {
    user: "agendash",
    password: "123456"
  },
  /**
   * API configs
   */
  api: {
    prefix: "/"
  },
  /**
   * Mailgun email credentials
   */
  emails: {
    apiKey: "API key from mailgun",
    domain: "Domain Name from mailgun"
  }
};
