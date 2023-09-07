import React from 'react';
import List from './List';
import Navbar from './Navbar';

//Get all the  albums list from App &  then map over the  
// List Component for each list on the Albums.....
const AlbumsList = (props) => {
  return (
    <>
    
      <Navbar page="Add Albums" path="/add-album" />

      <div className='albums-list'>
        {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
    </>
  )
}

export default AlbumsList