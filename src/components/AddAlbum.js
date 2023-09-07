import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  //This function is used to get all the inputs like UserId and Title then call 
  // AddAlbum function for add it on the Album lists

  const getDataAlbumForm = () => {
    const userId = document.getElementById('userid-inp').value;
    const title = document.getElementById('title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
    
      <Navbar path="/" page="Home" />

{/* Add Albums Form To add Album list  */}

<div className='row '>
  <div className='col-md-4 shadow mx-auto p-5 add-album-container'>
      <form className='text-center  '>
        <div className="mb-3">
            <h4>Enter New Album Details</h4>
          <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label"> Enter  UserId :</label>
              <input type="number" className="form-control" id='userid-inp'/>
          </div>

          <label for="exampleInputEmail1" className="form-label">  Enter Album Title :</label>
          <input type="text" className="form-control" id='title-inp' aria-describedby="emailHelp"/>  
         <Link to='/'>
          <button  onClick={getDataAlbumForm} className="btn btn-primary mt-5">Add To List</button> 
         </Link>
     </div>
   </form> 
  </div>
</div>


    </>
  )
}

export default AddAlbum;