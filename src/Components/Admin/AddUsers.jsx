import React, { useRef } from 'react'
import '../../CSS/addUsers.css'

import '../../CSS/addBooks.css'

const AddUsers = () => {

    let fname = useRef()
    let lname= useRef()
    let email = useRef()
    let phone = useRef()
    let place = useRef()
    let dob = useRef()


    let handleSubmit = (e)=>{
            e.preventDefault()

            let newUser = {
                firstname : fname.current.value,
                lasttname : lname.current.value,
                email : email.current.value,
                phone : phone.current.value,
                place : place.current.value,
                dateOfBirth : dob.current.value,

            }

            fetch('http://localhost:4000/users',{
                method: "POST",
                headers:{'Content-Type':"application/json"},
                body : JSON.stringify(newUser)
            })



    }

    

  return (
<>

<form onSubmit={handleSubmit}>
<div className="addBooks-con">
    <div className="addBooks">
        <div className="addBooks-inputs">
            <input ref={fname} type="text" placeholder='First Name  '/>
            <input ref={lname} type="text" placeholder='Last Name'/>
            <input ref={email} type="text" placeholder='email'/>
            <input ref={phone} type="text" placeholder='phone'/>
            <input ref={place} type="text" placeholder='place'/>
            <input ref={dob} type="text" placeholder='Date of Birth'/>

        </div>
        <div className="addBooks-btn">
        <button>
                Add Users
            </button>
        </div>

    </div>
</div>
</form>

</>

)
}

export default AddUsers