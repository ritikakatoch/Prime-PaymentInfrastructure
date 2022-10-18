import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";


const UserData= () => {
    const[ users, setUsers] =useState([]);

    useEffect(()=>{
        // console.log("My Application ");
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:3002/users");
        // console.log(result,"asd");
        setUsers(result.data);
    }

    const deleteUser=async id=>{
      await axios.delete(`http://localhost:3002/users/${id}`)
      loadUsers();
    }
  return (
    <>
      <div className="container newdata">
       <Link className="btn btn-outline-light w-10 adduser" to="/newuser">Add User</Link>
      <table class="table table-striped">
  <thead>
    <tr className="bg-white tex-black ">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
      <tr>
        <th scope="row">
          {index + 1}
        </th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          {/* <Link className="btn btn-primary p-2">Edit</Link> */}
          <Link className="btn btn-primary p-2 btn1" to={`edituser/${user.id}`}>Edit</Link>
          <Link className="btn btn-danger p-2" onClick={()=>{deleteUser(user.id)}}>Delete</Link>
        </td>
      </tr>
    ))}
  </tbody>
</table> 

      </div>
    </>
  );
 };

export default UserData;
