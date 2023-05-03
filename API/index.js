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
  console.log("Received request body:", req.body); // Log the request body for debugging purposes

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
    res.status(201).json({
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

//Delete Requests

//delete a member
app.delete("/api/members/:email", async (req, res) => {
  try {
    const email = req.params.email;
    console.log(`Attempting to delete member with email: ${email}`); // Log the email for debugging purposes
    const result = await connection.query(
      "DELETE FROM gen_member WHERE email = ?",
      [email]
    );
    console.log(`Deletion result:`, result); // Log the result for debugging purposes
    res.status(200).send("Member deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.delete("/api/presidents/:pres_email", async (req, res) => {
  try {
    const pres_email = req.params.pres_email;
    console.log(`Attempting to delete president with email: ${pres_email}`); // Log the email for debugging purposes
    const result = await connection.query("DELETE FROM president WHERE pres_email = ?", [
      pres_email,
    ]);
    console.log(`Deletion result:`, result); // Log the result for debugging purposes
    res.status(200).send("President deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.delete("/api/exec/:exec_email", async (req, res) => {
  try {
    const exec_email = req.params.exec_email;
    console.log(`Attempting to delete exec board member with email: ${exec_email}`); // Log the email for debugging purposes
    const result = await connection.query("DELETE FROM exec_board WHERE exec_email = ?", [
      exec_email,
    ]);
    console.log(`Deletion result:`, result); // Log the result for debugging purposes
    res.status(200).send("Exec board member deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.delete("/api/projects/:github_repo", async (req, res) => {
  try {
    const github_repo = req.params.github_repo;
    console.log(`Attempting to delete project with GitHub repo: ${github_repo}`); // Log the repo for debugging purposes
    const result = await connection.query("DELETE FROM projects WHERE github_repo = ?", [
      github_repo,
    ]);
    console.log(`Deletion result:`, result); // Log the result for debugging purposes
    res.status(200).send("Project deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.delete("/api/issues/:issue_number", async (req, res) => {
  try {
    const issue_number = req.params.issue_number;
    console.log(`Attempting to delete issue with issue number: ${issue_number}`); // Log the issue number for debugging purposes
    const result = await connection.query("DELETE FROM issue WHERE issue_number = ?", [
      issue_number,
    ]);
    console.log(`Deletion result:`, result); // Log the result for debugging purposes
    res.status(200).send("Issue deleted successfully");
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
