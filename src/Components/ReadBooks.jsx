import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../CSS/readbooks.css'
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ReadBooks = () => {
  let params = useParams()
  let bookId = params.id 
  let [book, setBook] = useState({})
  let [desc, setDesc] = useState('');
  let [showDesc, setShowDesc] = useState(false);
  let navigate = useNavigate();

  let goBack = () =>{

    navigate(`/adminPortal/books`)


  }
  
  // console.log(bookId);

  

  useEffect(()=>{
    let fetchApi = async() => {
      let url = await fetch(`http://localhost:4000/books/${bookId}`)
      let resp = await url.json();
      setBook(resp)
    };
    fetchApi();
  }, [book])

  // console.log(book);
  let {id, title , pageCount, thumbnailUrl, shortDescription, longDescription, authors, categories} = book
  let [bool, setBool]= useState(true)
  let handleClick = ( ) =>{
    setBool(!bool);
  }

  const handleshort = () => {
    setDesc(shortDescription);
    setShowDesc(!showDesc);
};

const handlelong = () => {
  setDesc(longDescription);
  setShowDesc(!showDesc);
};


return (
  <React.Fragment>
      <div className="readbook">
          <div className="rbcontainer">
              <div className="rbimg">
                  <img src={thumbnailUrl} />
              </div>
              <div className="rbproperty">
                  <h2>{title}</h2>
                  <h3>Pages : {pageCount}</h3>
                  {/* <h3>Status:{status}</h3> */}
                  <h3>Category : {categories}</h3>
                  <h3>Authors : {authors}</h3>
                  <div className="rbbtn">
                      <button onClick={handleshort}>Short Desc</button>
                      <button onClick={handlelong}>Long Desc</button>
                  </div>
                  {showDesc && (<div> <p>{desc}</p> </div> )}
                 
                  <div className="rbbtn1">
                      <button onClick={goBack}>Back</button>
                  </div>
              </div>

          </div>
      </div>
  </React.Fragment>
)
}

export default ReadBooks