import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
      let adminEmail = useRef(null)
    let adminPass = useRef(null)
   let navigate = useNavigate()

    let handleLogin =(e)=>{
        e.preventDefault();
        let email = adminEmail.current;
        let pass = adminPass.current;


        let credentials = {
            dataEmail : 'abc',
            dataPass : 'abc'
        }

        let {dataEmail, dataPass} = credentials;

        let err = `border:solid 1px red; background-color:red`
        if(dataEmail === email.value && dataPass === pass.value){
          navigate('/adminportal')
          // console.log("hello");
        }
        else {
          email.style.cssText = err;
          pass.style.cssText = err;

        }
    }

    
  return (
    <>
       
       <form onSubmit={handleLogin}>
                            
                            {/* <h3>{bool ? 'Admin Login' : 'User Login'}</h3> */}
                            <label for="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" ref={adminEmail} />

                            <label for="password">Password</label>
                            <input type="password" placeholder="Password" id="password" ref={adminPass} />

                            <button className='main-btn'>Log In</button>
                            <div className="social">
                            {/* <div className="go">  Google</div>
                            <div className="fb">  Facebook</div> */}
                            </div>
                        </form>
    </>
)
}

export default AdminLogin