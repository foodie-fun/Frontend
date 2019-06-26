
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import PrivateRoute from './authentication/PrivateRoute';
import EditForm from './components/EditForm';


function App() {
  return (
      <Router>
        <div className="App">
        <Route exact path ='/' render={props => <SignUp {...props} />}/>
        <PrivateRoute exact path ='/home' component={Home} />
        {/* <Link to ='/login'>Log In Here If you already have an account!</Link> */}
        <Route exact path ='/login' component={Login} />
        <Route exact path ='/edit' component={EditForm}/>
        </div>
      </Router>
  );
}

export default App;
