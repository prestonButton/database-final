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

//Get Requests

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
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/presidents", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM president");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.get("/api/exec", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM exec_board");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM projects");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.get('/api/issues', async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM issue");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// Post Requests

//add a member
app.post("/api/members", async (req, res) => {
  const {
    fname,
    lname,
    email,
    github_user,
    discord_user,
    project_repo,
    class_year,
  } = req.body;

  try {
    const result = await connection.query(
      "INSERT INTO gen_member (fname, lname, email, github_user, discord_user, project_repo, class_year) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [fname, lname, email, github_user, discord_user, project_repo, class_year]
    );
    res
      .status(201)
      .json({
        message: "Member added successfully!",
        insertId: result[0].insertId,
      });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

//add a president
app.post("/api/presidents", async (req, res) => {
  const { pres_email, term_number, special_privileges } = req.body;
  try {
    await connection.query(
      "INSERT INTO president (pres_email, term_number, special_privileges) VALUES (?, ?, ?)",
      [pres_email, term_number, special_privileges]
    );
    res.status(201).send("President added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

//add an exec board member
app.post("/api/exec", async (req, res) => {
  const { exec_email, project_repo, term_num, pos } = req.body;
  try {
    await connection.query(
      "INSERT INTO exec_board (exec_email, project_repo, term_num, pos) VALUES (?, ?, ?, ?)",
      [exec_email, project_repo, term_num, pos]
    );
    res.status(201).send("Exec board member added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

//add a project
app.post("/api/projects", async (req, res) => {
  const {
    proj_name,
    github_repo,
    languages,
    timeline,
    is_started,
    is_complete,
  } = req.body;
  try {
    await connection.query(
      "INSERT INTO projects (proj_name, github_repo, languages, timeline, is_started, is_complete) VALUES (?, ?, ?, ?, ?, ?)",
      [proj_name, github_repo, languages, timeline, is_started, is_complete]
    );
    res.status(201).send("Project added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

//add an issue
app.post("/api/issues", async (req, res) => {
  const {
    issue_number,
    issue_tag,
    comments,
    sprint_num,
    difficulty,
    is_started,
    is_complete,
    mem_email,
    project_repo,
  } = req.body;
  try {
    await connection.query(
      "INSERT INTO issue (issue_number, issue_tag, comments, sprint_num, difficulty, is_started, is_complete, mem_email, project_repo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        issue_number,
        issue_tag,
        comments,
        sprint_num,
        difficulty,
        is_started,
        is_complete,
        mem_email,
        project_repo,
      ]
    );
    res.status(201).send("Issue added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// Add routes for other tables following the same pattern

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
