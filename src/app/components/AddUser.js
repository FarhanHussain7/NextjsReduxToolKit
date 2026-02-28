"use client";
import "./style.css";
import Link from "next/link";
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
export default function AddUser() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch(); 
  
  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAddUser = () => {
    // Logic to add user goes here
    dispatch(addUser({ id: Date.now(), name: userName }));  
    // console.log("User added:", userName);
    setUserName(""); // Clear input after adding user
  };
  return (
    <div>
      <h1>Add User</h1>
        <p>This is the Add User page.</p>
        <input 
        type="text" 
        placeholder="Enter user name" 
        value={userName} 
        onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
        <button><Link href="/todolist">Add Todo</Link></button>

    </div>
  );
}   