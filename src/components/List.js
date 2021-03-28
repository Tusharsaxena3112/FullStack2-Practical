import React, { useState } from "react";
import "../list.css";
import "bootstrap";
import { Button } from "react-bootstrap";

function List() {
  const [user, setUser] = useState([]);
  const addUser = () => {
    if (document.getElementById("name").value !== "") {
      var newUser = {
        Sr: user.length + 1,
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
      };
      setUser(user.concat(newUser));
      document.getElementById("name").value = "";
      document.getElementById("password").value = "";
      document.getElementById("email").value = "";
    } else {
      alert('Enter the values')
    }
  };

  return (
    <div className="container">
      <h1>React Dynamic Table</h1>
      <div className="inputs">
        Name:
        <input type="text" name="name" id="name" />
        Password:
        <input type="password" name="password" id="password" />
        Email:
        <input type="text" name="email" id="email" />
        <Button onClick={addUser}>Add User</Button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Sr. No.</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
          {user.map((u, k) => {
            return (
              <tr key={k}>
                <td>{u.Sr}</td>
                <td>{u.name}</td>
                <td>{u.password}</td>
                <td>{u.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
