import React, { useRef, useState } from 'react'
import '../CSS/LandingPage.css'
import AdminLogin from './AdminLogin'
import UserLogin from './UserLogin'

const LandingPage = () => {

    let [bool, setBool]=useState(true)


    let handleClick = () =>{
        setBool(!bool)
        // console.log(bool);
    }

        

  return (
<>
    <div className="landingPage">
        <div className="landing-con">
            
                    <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    </div>

                 
                       {bool? <AdminLogin/> : <UserLogin/>}
           
    </div>
    <div class="user-type">

    <h2>    {bool? "Admin Login" : "User Login"}
    </h2>

    <div className='btn-switch '>
                
                
                <button onClick={handleClick}  className={bool ? 'admin-btn' : 'login-btn'}>{bool ? 'Admin Login' : 'User Login'}</button>
            
            
            </div>
    </div>

    </div>

</>
)
}

export default LandingPage