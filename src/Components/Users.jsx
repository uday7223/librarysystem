import React, { useEffect, useState } from 'react';
import '../CSS/users.css'

const Users = () => {
  let [users, setUsers] = useState([]);

  const fetchApi = async () => {
    try {
      let response = await fetch("http://localhost:4000/users");
      let apiData = await response.json();
      setUsers(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="users-con">
      <div className="users">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Place</th>
            <th>Password</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem) => {
            let { firstname, lasttname, email, phone, place, dateOfBirth } = elem;
            return (
              <tr>
                <td>{firstname}</td>
                <td>{lasttname}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{place}</td>
                <td>uday1234</td>
                <td>{dateOfBirth}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Users;
