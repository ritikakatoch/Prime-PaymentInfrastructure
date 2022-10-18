import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { toast } from "react-toastify";

const SignUp = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
   const[name, setname]=useState('');
   const[image, setimage]=useState('');
   const[email, setemail]=useState('');
   const[password, setpassword]=useState('');
  //  toast.success("User Saved");
   
//convert image
   const getBase64=(file)=>{
      return new Promise((resolve, reject)=>{
        const reader=new FileReader()
        reader.onload=()=>resolve(reader.result)
        reader.onabort=(error)=>reject(error)
        reader.readAsDataURL(file)
      })
   }

   //handle image
   const handleImg=(e)=>{
    const file=e.target.files[0]
    getBase64(file).then(getBase64 =>{
      localStorage['image']=getBase64;
      console.debug('File Store',getBase64);
    })
   }

   

  //submit function

  const handleSubmit=(e)=>{
    e.preventDefault();
     
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    // localStorage.setItem('image',image);
    localStorage.setItem('password',password);
  }


  return (
    <>
      <div className="signup-form">
        <form>
          <h2 class="signupheading">Sign Up</h2>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="username"
                value={name}
                onChange={e =>setname(e.target.value)}
                placeholder="Username"
                required="required"
              />
            </div>
          </div>
          
          <div className="form-group signinform">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input
                type="file"
                // value={image}

                className="form-control "
                onChange={handleImg}
                name="Default Image"
                placeholder="Default image"
                id="formFile"
                // required="required"
              />
              
            </div>
          </div>
         
          
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
                onChange={e=>setemail(e.target.value)}
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
                type="password"
                className="form-control password"
                name="password"
                value={password}
                onChange={e=>setpassword(e.target.value)}
                placeholder="Password"
                required="required"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <NavLink to="/" className="terms">
                {" "}
                Terms of Use
              </NavLink>{" "}
              &amp;{" "}
              <NavLink to="/" className="terms">
                Privacy Policy
              </NavLink>
            </label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-lg submit-btn"
              onClick={handleSubmit}
            >
              <NavLink to="/review" className="submit-btn">
                 Sign Up
            </NavLink>
             
      
            </button>
          </div>
        </form>
      </div>
      <iframe class="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chitkara%20University,Rajpura,Punjab+(My%20University%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy"></iframe>
    
    </>
  );
};
export default SignUp;