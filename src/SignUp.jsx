import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const SignIn= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate=useNavigate();
  const userName=localStorage.getItem('email') 
  ? localStorage.getItem('email'):'admin@gmail.com'

  const userPassword=localStorage.getItem('password') 
  ? localStorage.getItem('password'):'admin'


  //submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email === userName && password ===userPassword){
        // toast.success('Logged in');
        // navigate('/service');

    } 
    // else{
    //   toast.error('Invalid email or password');
    // }
}
  return (
    <>
      <div className="signup-form">
        <form>
          <h2 class="signupheading">Sign In</h2>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="Email Address"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
               <input
                type="text"
                className="form-control"
                name="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder="Password"
                required="required"/>
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg submit-btn">
            <NavLink to="/review" className="submit-btn">
                 Sign In
            </NavLink>
            </button>
          </div>
         
          </form>
        <div className="text-center signuptxt">
          Dont't have an account?{" "}
          <NavLink to="/signin" className="loginin">
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
 };

export default SignIn;
