import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {
  
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      <Navbar path="/" page="Home" />
   
{/* when user Clicks on update button it will redirect to the UpdateAlbum Component and here 
 shows a Form to the user to update the Album */}
     

<div className='row '>
 <div className='col-md-4 shadow mx-auto p-5 update-album'>
  <form className='text-center  '>
     <div class="mb-3">
       <h4>Title : {props.album.title}</h4>
       <label for="exampleInputEmail1" class="form-label">  Enter New Title :</label>
       <input type="text" class="form-control" id='title-inp' aria-describedby="emailHelp"/>   
       <div class="mb-3">
        <h4>User Id : {props.album.userId}</h4>
        <label for="exampleInputPassword1" class="form-label"> Enter New UserId :</label>
        <input type="number" class="form-control" id='userid-inp'/>
      </div>
       <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id='title-inp'/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
     <Link to='/'>
       <button type="submit" onClick={getUpdateData} class="btn btn-primary">Update</button> 
     </Link>
    </div>
  </form> 
  </div>
</div>

  </>
  )
}

export default UpdateAlbum;