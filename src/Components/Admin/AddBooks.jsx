import React, { useRef } from 'react'
import '../../CSS/addBooks.css'

const AddBooks = () => {

    let bookTitle =useRef();
    let authors =useRef();
    let isbn = useRef();
    let pageCount = useRef();
    let categories = useRef();
    let longDescription = useRef();
    let shortDescription = useRef();    

    let handleSubmit =(e)=>{
        e.preventDefault();

        let newBook = {
            title : bookTitle.current.value,
            authors : [authors.current.value],
            isbn : isbn.current.value,
            pageCount : pageCount.current.value,
            categories : [categories.current.value],
            longDescription : longDescription.current.value,
            shortDescription : shortDescription.current.value

        }
//to add data to the json file directly 
        fetch('http://localhost:4000/books',{
            method: "POST",
            headers:{'Content-Type':"application/json"},
            body : JSON.stringify(newBook)
    })
}
  return (
    <>
     <form onSubmit={handleSubmit}>
       <div className="addBooks-con">
       <div className="addBooks">
       <div className="addBooks-inputs">
       <input ref={bookTitle}  type="text" placeholder="Book name " />
        <input ref={authors} type="text"   placeholder="Authors names  " />
        <input ref={isbn}  type="text" placeholder="Book ISBN " />
        <input ref={pageCount}  type="text" placeholder="Page count " />
        <input ref={categories}  type="text" placeholder="Book category " />
        <input ref={longDescription}  type="text" placeholder="Long description " />
        <input ref={shortDescription}  type="text" placeholder="Short Description" />

       </div>
       
       <div className="addBooks-btn">
       <button>Add Book</button>
       </div>

            

        </div>


       </div>
        </form>

    </>
)
}

export default AddBooks