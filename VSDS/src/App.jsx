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

  }, [])

  const getMembers = async() => {
    const res = await axios.get('http://localhost:3000/api/members')
    const members = new Array();
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
      members.push(memberArray)
    }
    console.log(members)

    setMembers(members)
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
              Trows={[
                ["steve@apple.com", "Dead", "Can't be fired"],
                ["steve@apple.com", "Dead", "Can't be fired"],
                ["steve@apple.com", "Dead", "Can't be fired"],
                ["steve@apple.com", "Dead", "Can't be fired"],
                ["steve@apple.com", "Dead", "Can't be fired"],
                ["steve@apple.com", "Dead", "Can't be fired"],
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}



export default App
