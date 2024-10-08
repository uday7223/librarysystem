import React, { useEffect, useRef, useState } from 'react'
import UserPortal from './User/UserPortal';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

//using json server for loging as a User
//   let [users, setUsers]=useState([])
//   //collectign user input fields from useRefs
//   let inputEmail = useRef();
//   let inputPassword = useRef();
//   let navigate =  useNavigate()
  
//   //storing the collected data in to a variables 
//   let userEmail = inputEmail.current;
//   let userPassword = inputPassword.current;

//   const fetchApi = async () => {
//     try {
//       let response = await fetch("http://localhost:4000/users");
//       let apiData = await response.json();
//       setUsers(apiData);
//       // console.log(apiData);

//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
    
//   };

//   // console.log(users);
// //fetching API using useEffect
//   useEffect(() => {
//     fetchApi();
//   }, []); // Empty dependency array ensures this runs only once on component mount

//   // console.log(users);



// let allUsers =  users.map((elem) => {
//       let {email,firstname,lastname} = elem;  

  
//         //  console.log(email);
//       })
//       // console.log(allUsers);

//   let handleUserLogin=(e)=>{
//     e.preventDefault()


//   //checking wether the user email present or not     
//       let  email = allUsers.includes(userEmail.value)
//       let  pass = (userPassword.value === 'uday1234')
//       // console.log(userEmail.value);
//       if(email && pass){
//         navigate('./userportal')
//       }
//       else {
//         let err = `border:solid 2px red`
//         inputEmail.current.style.cssText = err;
//         inputPassword.current.style.cssText = err;
//       }


//   }

//=======================================================================
//using hardcoded object for loging in as a user
let userEmail = useRef(null)
let userPass = useRef(null)
let navigate = useNavigate()

let handleUserLogin =(e)=>{
  e.preventDefault();
  let email = userEmail.current;
  let pass = userPass.current;


  let credentials = {
      dataEmail : 'abc',
      dataPass : 'abc'
  }

  let {dataEmail, dataPass} = credentials;

  let err = `border:solid 1px red; background-color:red`
  if(dataEmail === email.value && dataPass === pass.value){
    localStorage.setItem("userRole", 'user');
    navigate('/userportal/*')
    // console.log("hello");
  }
  else {
    email.style.cssText = err;
    pass.style.cssText = err;

  }
}


  



return (
<>
          


        <form onSubmit={handleUserLogin}>
            

            <label for="username">Username</label>
            <input ref={userEmail} type="text" placeholder="Email or Phone" id="username" />

            <label for="password">Password</label>
            <input ref={userPass} type="text" placeholder="Password" id="password" />

            <button className='main-btn' type='submit' > Log In</button>
            <div className="social"> 
            
            </div>
        </form>
</>
)
}


export default UserLogin