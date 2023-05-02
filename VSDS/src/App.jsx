import './App.css'
import React, { useState, useEffect } from 'react'
import Table from './table.jsx'
import axios from 'axios'

function App() {
  const [members, setMembers] = useState([])
  const [presidents, setPresidents] = useState([])
  const [projects, setProjects] = useState([])
  const [exec, setExec] = useState([])
  const [issues, setIssues] = useState([])


  useEffect(() => {
    getMembers();
    getPresidents();
    getExec();
    getProjects();
    getIssues();
  }, [])

  const getMembers = async() => {
    const res = await axios.get('http://localhost:3000/api/members')
    const membersArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const member = res.data[i]
      const memberArray = new Array()
      memberArray.push(member.fname)
      memberArray.push(member.lname)
      memberArray.push(member.email)
      memberArray.push(member.github_user)
      memberArray.push(member.discord_user)
      memberArray.push(member.project_repo)
      memberArray.push(member.class_year)
      membersArr.push(memberArray)
    }

    setMembers(membersArr)
  }

  const getPresidents = async() => {
    const res = await axios.get('http://localhost:3000/api/presidents')
    const presidentsArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const president = res.data[i]
      const presidentArray = new Array()
      presidentArray.push(president.pres_email)
      presidentArray.push(president.term_number)
      presidentArray.push(president.special_privileges)
      presidentsArr.push(presidentArray)
    }

    setPresidents(presidentsArr)
  }

  const getExec = async() => {
    const res = await axios.get('http://localhost:3000/api/exec')
    const execArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const exec = res.data[i]
      const execArray = new Array()
      execArray.push(exec.exec_email)
      execArray.push(exec.project_repo)
      execArray.push(exec.term_num)
      execArray.push(exec.pos)
      execArr.push(execArray)
    }

    setExec(execArr)
  }

  const getProjects = async() => {
    const res = await axios.get('http://localhost:3000/api/projects')
    const projectsArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const project = res.data[i]
      const projectArray = new Array()
      projectArray.push(project.proj_name)
      projectArray.push(project.github_repo)
      projectArray.push(project.languages)
      projectArray.push(project.timeline)
      projectArray.push(project.is_started)
      projectArray.push(project.is_complete)
      projectsArr.push(projectArray)
    }

    setProjects(projectsArr)
  }

  const getIssues = async() => {
    const res = await axios.get('http://localhost:3000/api/issues')
    const issuesArr = new Array();
    for (let i = 0; i < res.data.length; i++) {
      //definitely not the most efficient way to do this
      const issue = res.data[i]
      const issueArray = new Array()
      issueArray.push(issue.issue_number)
      issueArray.push(issue.issue_tag)
      issueArray.push(issue.comments)
      issueArray.push(issue.sprint_num)
      issueArray.push(issue.difficulty)
      issueArray.push(issue.is_started)
      issueArray.push(issue.is_complete)
      issueArray.push(issue.mem_email)
      issueArray.push(issue.project_repo)
      issuesArr.push(issueArray)
    }

    setIssues(issuesArr)
  }


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
            />
            <Table
              Tname="Presidents"
              Tcols={["President Email", "Term Number", "Special Priviledges"]}
              Trows={presidents}
            />
            <Table
              Tname="Exec board"
              Tcols={["Exec Email", "Project Repo", "Term number", "Position"]}
              Trows={exec}
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
                " Project Repo"
              ]}
              Trows={issues}
            />
          </div>
        </main>
      </div>
    </>
  );
}



export default App
