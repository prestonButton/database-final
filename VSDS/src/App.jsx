import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./table.jsx";
import axios from "axios";

function App() {
  const [members, setMembers] = useState([]);
  const [presidents, setPresidents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [exec, setExec] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getMembers();
    getPresidents();
    getExec();
    getProjects();
    getIssues();
  }, []);

  const getMembers = async () => {
    const res = await axios.get("http://localhost:3000/api/members");
    const membersArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const member = res.data[i];
      const memberArray = new Array();
      memberArray.push(member.fname);
      memberArray.push(member.lname);
      memberArray.push(member.email);
      memberArray.push(member.github_user);
      memberArray.push(member.discord_user);
      memberArray.push(member.project_repo);
      memberArray.push(member.class_year);
      membersArr.push(memberArray);
    }

    setMembers(membersArr);
  };

  const getPresidents = async () => {
    const res = await axios.get("http://localhost:3000/api/presidents");
    const presidentsArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const president = res.data[i];
      const presidentArray = new Array();
      presidentArray.push(president.pres_email);
      presidentArray.push(president.term_number);
      presidentArray.push(president.special_privileges);
      presidentsArr.push(presidentArray);
    }

    setPresidents(presidentsArr);
  };

  const getExec = async () => {
    const res = await axios.get("http://localhost:3000/api/exec");
    const execArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const exec = res.data[i];
      const execArray = new Array();
      execArray.push(exec.exec_email);
      execArray.push(exec.project_repo);
      execArray.push(exec.term_num);
      execArray.push(exec.pos);
      execArr.push(execArray);
    }

    setExec(execArr);
  };

  const getProjects = async () => {
    const res = await axios.get("http://localhost:3000/api/projects");
    const projectsArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const project = res.data[i];
      const projectArray = new Array();
      projectArray.push(project.proj_name);
      projectArray.push(project.github_repo);
      projectArray.push(project.languages);
      projectArray.push(project.timeline);
      projectArray.push(project.is_started);
      projectArray.push(project.is_complete);
      projectsArr.push(projectArray);
    }

    setProjects(projectsArr);
  };

  const getIssues = async () => {
    const res = await axios.get("http://localhost:3000/api/issues");
    const issuesArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const issue = res.data[i];
      const issueArray = new Array();
      issueArray.push(issue.issue_number);
      issueArray.push(issue.issue_tag);
      //comments only print first 30 characters + ...
      if (issue.comments.length > 30) {
        issueArray.push(issue.comments.substring(0, 30) + "...");
      } else {
        issueArray.push(issue.comments);
      }
      issueArray.push(issue.sprint_num);
      issueArray.push(issue.difficulty);
      issueArray.push(issue.is_started);
      issueArray.push(issue.is_complete);
      issueArray.push(issue.mem_email);
      issueArray.push(issue.project_repo);
      issuesArr.push(issueArray);
    }

    setIssues(issuesArr);
  };

  //add a member
  const addMember = async (newData) => {
    const [
      fname,
      lname,
      email,
      github_user,
      discord_user,
      project_repo,
      class_year,
    ] = newData;
    try {
      const res = await axios.post("http://localhost:3000/api/members", {
        fname,
        lname,
        email,
        github_user,
        discord_user,
        project_repo,
        class_year,
      });
      console.log(res.data);
      // Update the state with the new member
      getMembers();
    } catch (err) {
      console.error(err);
    }
  };

  // Add a president
  const addPresident = async (newData) => {
    const [pres_email, term_number, special_privileges] = newData;
    try {
      const res = await axios.post("http://localhost:3000/api/presidents", {
        pres_email,
        term_number,
        special_privileges,
      });
      console.log(res.data);
      // Update the state with the new president
      getPresidents();
    } catch (err) {
      console.error(err);
    }
  };

  // Add an exec
  const addExec = async (newData) => {
    const [exec_email, project_repo, term_num, pos] = newData;
    try {
      const res = await axios.post("http://localhost:3000/api/exec", {
        exec_email,
        project_repo,
        term_num,
        pos,
      });
      console.log(res.data);
      // Update the state with the new exec board member
      getExec();
    } catch (err) {
      console.error(err);
    }
  };

  // Add a project
  const addProject = async (newData) => {
    const [
      proj_name,
      github_repo,
      languages,
      timeline,
      is_started,
      is_complete,
    ] = newData;
    try {
      const res = await axios.post("http://localhost:3000/api/projects", {
        proj_name,
        github_repo,
        languages,
        timeline,
        is_started,
        is_complete,
      });
      console.log(res.data);
      // Update the state with the new project
      getProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // Add an issue
  const addIssue = async (newData) => {
    const [
      issue_number,
      issue_tag,
      comments,
      sprint_num,
      difficulty,
      is_started,
      is_complete,
      mem_email,
      project_repo,
    ] = newData;
    try {
      const res = await axios.post("http://localhost:3000/api/issues", {
        issue_number,
        issue_tag,
        comments,
        sprint_num,
        difficulty,
        is_started,
        is_complete,
        mem_email,
        project_repo,
      });
      console.log(res.data);
      // Update the state with the new issue
      getIssues();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a member
  const deleteMember = async (email) => {
    console.log("Deleting member with email:", email);
    try {
      await axios.delete(`http://localhost:3000/api/members/${email}`);
      getMembers(); // Refresh the members table after deletion
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a president
  const deletePresident = async (pres_email) => {
    console.log("Deleting president with email:", pres_email);
    try {
      await axios.delete(`http://localhost:3000/api/presidents/${pres_email}`);
      getPresidents(); // Refresh the presidents table after deletion
    } catch (error) {
      console.error(error);
    }
  };

  // Delete an exec board member
  const deleteExec = async (exec_email) => {
    console.log("Deleting exec board member with email:", exec_email);
    try {
      await axios.delete(`http://localhost:3000/api/exec/${exec_email}`);
      getExec(); // Refresh the exec board table after deletion
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a project
  const deleteProject = async (github_repo) => {
    console.log("Deleting project with GitHub repo:", github_repo);
    try {
      await axios.delete(`http://localhost:3000/api/projects/${github_repo}`);
      getProjects(); // Refresh the projects table after deletion
    } catch (error) {
      console.error(error);
    }
  };

  // Delete an issue
  const deleteIssue = async (issue_number) => {
    console.log("Deleting issue with issue number:", issue_number);
    try {
      await axios.delete(`http://localhost:3000/api/issues/${issue_number}`);
      getIssues(); // Refresh the issues table after deletion
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>VSDS</h1>
        </header>
        <main>
          <div className="gen_members">
            <Table
              Tname="General Members"
              Tcols={[
                "First Name",
                "Last Name",
                "Email",
                "GitHub",
                "Discord",
                "Project",
                "Class Year",
              ]}
              Trows={members}
              onAdd={addMember}
              onDelete={deleteMember}
              primaryKeyField="Email"
            />
            <Table
              Tname="Presidents"
              Tcols={["President Email", "Term Number", "Special Priviledges"]}
              Trows={presidents}
              onAdd={addPresident}
              onDelete={deletePresident}
              primaryKeyField="President Email"
            />
            <Table
              Tname="Exec board"
              Tcols={["Exec Email", "Project Repo", "Term number", "Position"]}
              Trows={exec}
              onAdd={addExec}
              onDelete={deleteExec}
              primaryKeyField="Exec Email"
            />
            <Table
              Tname="Projects"
              Tcols={[
                "Project Name",
                "Github Repo",
                "Languages",
                "Timeline",
                "Started",
                "Complete",
              ]}
              Trows={projects}
              onAdd={addProject}
              onDelete={deleteProject}
              primaryKeyField="Github Repo"
            />
            <Table
              Tname="Issues"
              Tcols={[
                "Issue Number",
                "Issue Tag",
                "Comments",
                "Sprint Number",
                "Difficulty",
                "Started",
                "Complete",
                "Assigned To",
                "Project Repo",
              ]}
              Trows={issues}
              onAdd={addIssue}
              onDelete={deleteIssue}
              primaryKeyField="Issue Number"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
