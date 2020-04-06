require("dotenv").config({ path: "./.env" });
import mysql from "mysql";

const dbConnnectionPool = mysql.createPool({
  connectionLimit: process.env.DB_CONNECTION_POOL,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

dbConnnectionPool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();
  return;
});

export default dbConnnectionPool;
