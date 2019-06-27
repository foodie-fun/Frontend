
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import PrivateRoute from './authentication/PrivateRoute';
import EditForm from './components/EditForm';
import AddForm from './components/AddForm';
import SearchReview from './components/SearchReview';


function App() {
  return (
      <Router>        
        <div className="App">
        <Route exact path ='/' render={props => <SignUp {...props} />}/>
        <PrivateRoute exact path ='/home' component={Home} />
        {/* <Link to ='/login'>Log In Here If you already have an account!</Link> */}
        <Route exact path ='/login' component={Login} />
        <Route exact path ='/edit' component={EditForm}/>
        <Route exact path ='/add' component={AddForm} />
        {/* <Route exact path ='/sort' component={SearchReview} /> */}

        </div>
      </Router>
  );
}

export default App;
