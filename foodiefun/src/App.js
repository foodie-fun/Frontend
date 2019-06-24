import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <Link to ='/api/login'>Log In Here</Link>
        <Route path ='/' component={Login} />
        <PrivateRoute exact path ='/api/home' component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
