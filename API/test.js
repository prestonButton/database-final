const express = require("express");
const oracledb = require("node-oracledb");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING,
};

async function executeQuery(query, binds = []) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(query, binds, { autoCommit: true });
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

// Test database connection
app.get("/api/test", async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    await connection.close();
    res.json({ message: "Database connection is successful!" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        message: "Error connecting to the database.",
        error: err.message,
      });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
