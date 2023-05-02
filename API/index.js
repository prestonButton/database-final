const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
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

// Add member
app.post("/api/gen_member", async (req, res) => {
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
    const result = await executeQuery(
      `INSERT INTO gen_member (fname, lname, email, github_user, discord_user, project_repo, class_year)
       VALUES (:fname, :lname, :email, :github_user, :discord_user, :project_repo, :class_year)`,
      [fname, lname, email, github_user, discord_user, project_repo, class_year]
    );

    res.status(201).json({ message: "Member added successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error adding member.", error: err });
  }
});

// Assign issue to member
app.put("/api/issue/:issue_number/assign", async (req, res) => {
  const { issue_number } = req.params;
  const { mem_email } = req.body;

  try {
    const result = await executeQuery(
      "UPDATE issue SET mem_email = :mem_email WHERE issue_number = :issue_number",
      [mem_email, issue_number]
    );

    res.json({ message: "Issue assigned successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error assigning issue.", error: err });
  }
});

// Remove member
app.delete("/api/gen_member/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const result = await executeQuery(
      "DELETE FROM gen_member WHERE email = :email",
      [email]
    );

    res.json({ message: "Member removed successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error removing member.", error: err });
  }
});

// List all members of a specific project
app.get("/api/projects/:project_repo/members", async (req, res) => {
  const { project_repo } = req.params;

  try {
    const result = await executeQuery(
      "SELECT * FROM gen_member WHERE project_repo = :project_repo",
      [project_repo]
    );
    res.json(result.rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching project members.", error: err });
  }
});

// Update a member's information
app.put("/api/gen_member/:email", async (req, res) => {
  const { email } = req.params;
  const { fname, lname, github_user, discord_user, project_repo, class_year } =
    req.body;

  try {
    const result = await executeQuery(
      `UPDATE gen_member SET
                 fname = :fname,
         lname = :lname,
         github_user = :github_user,
         discord_user = :discord_user,
         project_repo = :project_repo,
         class_year = :class_year
       WHERE email = :email`,
      [fname, lname, github_user, discord_user, project_repo, class_year, email]
    );

    res.json({ message: "Member information updated successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating member information.", error: err });
  }
});

// List all issues for a specific project
app.get("/api/projects/:project_repo/issues", async (req, res) => {
  const { project_repo } = req.params;

  try {
    const result = await executeQuery(
      "SELECT * FROM issue WHERE project_repo = :project_repo",
      [project_repo]
    );
    res.json(result.rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching project issues.", error: err });
  }
});

// Update a project's information
app.put("/api/projects/:github_repo", async (req, res) => {
  const { github_repo } = req.params;
  const { proj_name, languages, timeline, is_started, is_complete } = req.body;

  try {
    const result = await executeQuery(
      `UPDATE projects SET
         proj_name = :proj_name,
         languages = :languages,
         timeline = :timeline,
         is_started = :is_started,
         is_complete = :is_complete
       WHERE github_repo = :github_repo`,
      [proj_name, languages, timeline, is_started, is_complete, github_repo]
    );

    res.json({ message: "Project information updated successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating project information.", error: err });
  }
});

// List all executive board members for a specific term
app.get("/api/exec_board/term/:term_num", async (req, res) => {
  const { term_num } = req.params;

  try {
    const result = await executeQuery(
      "SELECT * FROM exec_board WHERE term_num = :term_num",
      [term_num]
    );
    res.json(result.rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching executive board members.", error: err });
  }
});

// Create a new project
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
    const result = await executeQuery(
      `INSERT INTO projects (proj_name, github_repo, languages, timeline, is_started, is_complete)
       VALUES (:proj_name, :github_repo, :languages, :timeline, :is_started, :is_complete)`,
      [proj_name, github_repo, languages, timeline, is_started, is_complete]
    );

    res.status(201).json({ message: "Project created successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error creating project.", error: err });
  }
});

// Delete a project
app.delete("/api/projects/:github_repo", async (req, res) => {
  const { github_repo } = req.params;

  try {
    const result = await executeQuery(
      "DELETE FROM projects WHERE github_repo = :github_repo",
      [github_repo]
    );

    res.json({ message: "Project deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting project.", error: err });
  }
});

// Add an issue to a project
app.post("/api/projects/:project_repo/issues", async (req, res) => {
  const { project_repo } = req.params;
  const {
    issue_number,
    issue_tag,
    comments,
    sprint_num,
    difficulty,
    is_started,
    is_complete,
    mem_email,
  } = req.body;

  try {
    const result = await executeQuery(
      `INSERT INTO issue (issue_number, issue_tag, comments, sprint_num, difficulty, is_started, is_complete, mem_email, project_repo)
       VALUES (:issue_number, :issue_tag, :comments, :sprint_num, :difficulty, :is_started, :is_complete, :mem_email, :project_repo)`,
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

    res.status(201).json({ message: "Issue added successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error adding issue.", error: err });
  }
});

// Update an issue's information
app.put("/api/issues/:issue_number", async (req, res) => {
  const { issue_number } = req.params;
  const {
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
    const result = await executeQuery(
      `UPDATE issue SET
         issue_tag = :issue_tag,
         comments = :comments,
         sprint_num = :sprint_num,
         difficulty = :difficulty,
         is_started = :is_started,
         is_complete = :is_complete,
         mem_email = :mem_email,
         project_repo = :project_repo
       WHERE issue_number = :issue_number`,
      [
        issue_tag,
        comments,
        sprint_num,
        difficulty,
        is_started,
        is_complete,
        mem_email,
        project_repo,
        issue_number,
      ]
    );

    res.json({ message: "Issue information updated successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating issue information.", error: err });
  }
});

// Delete an issue
app.delete("/api/issues/:issue_number", async (req, res) => {
  const { issue_number } = req.params;

  try {
    const result = await executeQuery(
      "DELETE FROM issue WHERE issue_number = :issue_number",
      [issue_number]
    );

    res.json({ message: "Issue deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting issue.", error: err });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
