import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Form from './components/Form';
import Team from './components/Team';

const teamList = [
  {
    name: 'Nico',
    email: 'chiku524@icloud.com',
    role: 'Full-stack developer'
  },
  {
    name: 'Ryan',
    email: 'ryan@gmail.com',
    role: 'Back-end developer'
  },
  {
    name: 'Anna',
    email: 'anna@gmail.com',
    role: 'Supervisor'
  },
  {
    name: 'Becky',
    email: 'becky@icloud.com',
    role: 'Team lead'
  }
]

console.log(teamList);

function App() {
  const [members, setMembers] = useState(teamList)

  const addMember = (member) => {
    setMembers([...members, member])
  }

  return (
    <Router>
      <div>
        <Route exact path='/'>
          <Form addMember={addMember} />
          <h1>Team Members</h1>
          {members.map((member) => (<Team name={member.name} email={member.email} role={member.role} /> ))}
        </Route>
      </div>
    </Router>
  );
}

export default App;
