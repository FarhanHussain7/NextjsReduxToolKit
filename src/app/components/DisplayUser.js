"use client";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slice";
import "./style.css";
import Addtodo from "../todolist/page";
import Link from "next/link";
export default function DisplayUser() {
  const userData = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  // console.log("User data from Redux store:", userData);

  return (
    <div>
      <h1>Display User</h1>
        <p>This is the Display User page.</p>
        <div className="user-list">
          {
          userData.length > 0 ? (
            userData.map((user) => (  
              <div key={user.id} className="user-card">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p>
                  <button onClick={() => dispatch(removeUser(user.id))}>
                     Remove
                  </button>
                  <button><Link href="/todolist">Add Todo</Link></button>
                </p>
              </div>
            ))
          ) : (
            <p> No users found.</p>
          )}
          </div>
    </div>
  );
}
