import React from 'react'
import { Link } from "react-router-dom";



//Get Album from Album list and show.....
const List = (props) => {
 

return(

  // Unordered List using to show Album list 
<ul class="list-group list-group-horizontal-md">
    <li class="list-group-item">
      <div class="card text-bg-info mb-3" style={{'width': '18rem'}}> 
       <div class="card-body">
         <p class="card-text"> <h3>{props.album.title}</h3></p>
       </div>
       <div class="card-body d-flex justify-content-between">
        <Link to="/update-album"><button id='myModal' className="btn btn-primary px-4" onClick={() => props.setUpdateAlbum(props.album)}>Update</button></Link>
        <button className='btn btn-danger  ml-0' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
       </div>
     </div>
   </li>
</ul>

)
}


export default List