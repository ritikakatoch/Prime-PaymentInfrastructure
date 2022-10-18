import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import SignUp from './SignIn';
import Navbar from './Navbar';
import SignIn from './SignUp';
import UserData from './UserData';
import NewUser from './NewUser';
import EditUser from './EditUser';

import {Switch,Redirect,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';




const App=()=>{
    return (
        <>
        <Navbar/> 
        <ToastContainer
        position="top-center"
        height="20px"
        width="20px"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        dragaable
        pauseOnHover
        />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/userdata" component={UserData}/>
            <Route  exact path="/signin" component={SignIn}/>
            <Route  exact path="/signup" component={SignUp}/>
            <Route  exact path="/edituser/:id" component={EditUser}/>
            <Route  exact path="/signin" component={SignIn}/>
            <Route  exact path="/newuser" component={NewUser}/>
            <Redirect to="/"/>
            <Home/>
        </Switch> 
        </>
    );
};

export default App;