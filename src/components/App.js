import React, { Component } from 'react'
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import AddAlbum from './AddAlbum.js';
import AlbumsList from './AlbumList';
import UpdateAlbum from './UpdateAlbums.js';
import { toast } from 'react-toastify';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      updateAlbum: {}
    }
  }

  //  componentDidMount  function to fetch all the List from the ApI
  componentDidMount = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) =>{
        console.log(json)
        return json;
      }
     );
    this.setState({
      albums
    })
  }

  

  
  //This function  is used to take album id from albums list and then delete 
  // the album from albums list and update state....
  deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE', })
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    toast.success("Your Album Deleted successfully From The List")

    
    this.setState({
      albums: newAlbums,
    })
  }
  


  
  //This function  is used to take album object from albums list
  //  and set  the state for update albums
  setUpdateAlbum = async (album) => {
    this.setState({
      updateAlbum: album
    })
  }


  //updateAlbumInList function Updates The Album data 
  // like (album id,UpdateTitle,updateUserid, oldAlbum and then update and set state )

  updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];
    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle
      }
    }
    albums[index] = updatedAlbum;
    this.setState({
      albums: albums
    })
    toast.success("Album Updated Successfully")
    
   
  }
  

  
  //addAlbumToList function is used to Add The Album in the Album List
  
  addAlbumToList = (userId, title) => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }
    this.setState({
      albums: [...this.state.albums, album]
    })
    toast.success("New Album added successfully in the bottom!!")
   
  }
  

  render() {
    return (
      <>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<AlbumsList albums={this.state.albums} setUpdateAlbum={this.setUpdateAlbum} deleteAlbumFromList={this.deleteAlbumFromList} />}></Route>
          <Route path='/add-album' element={<AddAlbum addAlbumToList={this.addAlbumToList} />}></Route>
          <Route path='/update-album' element={<UpdateAlbum album={this.state.updateAlbum} updateAlbumInList={this.updateAlbumInList} />}></Route>
        </Routes>
      </>
    )
  }
}
