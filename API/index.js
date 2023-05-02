const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  host: process.env.DB_HOST, // or your MySQL host
  user: process.env.USER, // or your MySQL user
  password: process.env.PASSWORD, // or your MySQL password
  database: "VSDS",
};

let connection;

async function handleDisconnect() {
  console.log("Connecting with config:", dbConfig); // Add this line for debugging
  connection = await mysql.createConnection(dbConfig);

  connection.on("error", (err) => {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

app.get("/", (req, res) => {
  res.send("Welcome to the VSDS REST API!");
});

app.get("/api/test", (req, res) => {
  if (connection) {
    res.send("Connection is successful");
  } else {
    res.send("Connection is not successful");
  }
});

// Add your API routes here
// Example: Projects API routes
app.get("/api/members", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM gen_member");
    console.log("Fetched projects:", rows); // Add this line for debugging
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/databases", async (req, res) => {
  try {
    const [rows] = await connection.query("SHOW DATABASES");
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/tables", async (req, res) => {
  try {
    const [rows] = await connection.query("SHOW TABLES FROM VSDS");
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.post("/api/projects", async (req, res) => {
  try {
    const {
      proj_name,
      github_repo,
      languages,
      timeline,
      is_started,
      is_complete,
    } = req.body;
    const query =
      "INSERT INTO projects (proj_name, github_repo, languages, timeline, is_started, is_complete) VALUES (?, ?, ?, ?, ?, ?)";
    await connection.query(query, [
      proj_name,
      github_repo,
      languages,
      timeline,
      is_started,
      is_complete,
    ]);
    res.status(201).send("Project created successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add routes for other tables following the same pattern

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
