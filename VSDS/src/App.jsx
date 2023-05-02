import './App.css'
// import React from 'react'
import Table from './table.jsx'

function App() {


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
              Trows={[
                [
                  "Steve",
                  "Jobs",
                  "steve@apple.com",
                  "stevejobs",
                  "stevejobs",
                  "Apple",
                  "1972",
                ],
              ]}
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
