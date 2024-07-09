import React, { useState } from 'react'
import '../CSS/books.css'
import { useNavigate } from 'react-router-dom'

const Books = () => {


   let [books,setBooks] = useState([])

    const fetchApi =  async() =>{
        let apiData = await fetch('http://localhost:4000/books')
        .then(resp=> resp.json())
        setBooks(apiData);
        
    }

    fetchApi()


  let navigate =useNavigate()
  
  let viewProduct = (id) =>{

    navigate(`/adminportal/readBooks/${id}`)


  }

  let deleteProduct=(id, title)=>{
   let bool = window.confirm(`Do you want to delete ${title} book ?`)

   if(bool){
    fetch(`http://localhost:4000/books/${id}`, {method:"DELETE"})
    alert( `${title} is deleted !` )
   }
   else {
    alert('Book not deleted !')
   }


    

  }

  return (

    <>
    <div className="books">
  
    
    
    {
      books.map((elem)=>{

        let {id, title, isbn, pageCount, thumbnailUrl, status, authors, categories:[c]} = elem

        return (

            <>
            

            <div className="book-card">
                  <div className="main-con">
                          <div className="img">
                              <img src={thumbnailUrl} alt="" />
                            </div>
                          <div className="card-con">
                                  <h2>{title}</h2>
                                  <h4>Authors : {authors}</h4>
                                  <h4>ISBN :{isbn}</h4>
                                  <h4>Page Count : {pageCount}</h4>
                                  <h4>Categories :{c}</h4>
                          </div>
                  </div>

            <div className="buttons" >
              <button  onClick={()=>viewProduct(id)}>Read Book</button>
            <button onClick={()=>deleteProduct(id, title)}>Delete</button>
            </div>
            


            </div>
            



          </>

        )
      
      })


    }

    </div>
    
    </>

  )
}

export default Books