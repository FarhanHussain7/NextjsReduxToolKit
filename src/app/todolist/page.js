"use client";
// import "./style.css";
import { useState } from "react";
import { addTodo } from "../redux/todoslice";
import { useDispatch } from "react-redux";
export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch(); 
  
  const handleInputChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = () => {
    // Logic to add todo goes here
    dispatch(addTodo({ id: Date.now(), title: todoTitle, description: todoDescription }));  
    console.log("Todo added:", todoTitle, todoDescription);
    setTodoTitle(""); // Clear input after adding todo
    setTodoDescription("");
  };
  return (
    <div>
      <h1>Add Todo</h1>
        <p>This is the Add Todo page.</p>
        <input 
        type="text" 
        placeholder="Enter todo title" 
        value={todoTitle} 
        onChange={handleInputChange} />
        <input 
        type="text" 
        placeholder="Enter todo description" 
        value={todoDescription} 
        onChange={(e) => setTodoDescription(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}   