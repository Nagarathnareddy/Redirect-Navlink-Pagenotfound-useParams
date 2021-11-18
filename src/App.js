
import './App.css';
import {BrowserRouter as Router,Route,NavLink,useLocation} from 'react-router-dom'
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import Tasks from './pages/Tasks';
import Leaves from './pages/Leaves';
import React from 'react';
import Illegal from './pages/Illegal';
import Pagenotfound from './pages/Pagenotfound';

function App() {

  let location = useLocation()
  console.log(location)
  
  return (  
    <div className="App">
      <Router>
      <nav hidden={location.pathname === "/"}>
        <ul>
          <li><NavLink to="/dashboard" activeClassName="active">UserDashboard</NavLink></li>
          <li><NavLink to="/Leaves">Leaves</NavLink></li>
          <li><NavLink to="/Tasks">Tasks</NavLink></li>
        </ul>
        </nav>
      <Route path="/"exact component={Login}/>
      <Route path="/dashboard" component={UserDashboard}/>
      <Route path="/tasks/:username/:userid" component={Tasks}/>
      <Route path="/leaves" component={Leaves}/>
      <Route path="/illegal" component={Illegal}/>
      <Route component={Pagenotfound}/>
      </Router>
    </div>
  );
}

export default App;
