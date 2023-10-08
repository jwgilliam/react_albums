import "./AlbumForm.css"
import { useContext } from 'react';
import { albumContext } from './AlbumProvider';

export default function AlbumForm() {

  const { addAlbum } = useContext(albumContext)

  const submitHandler = (event) => {
    event.preventDefault();
    const newAlbum = {
      albumTitle: document.querySelector(".title_input").value,
      albumArtist: document.querySelector(".artist_input").value,
      albumRating: document.querySelector(".rating_input").value



    }

    addAlbum(newAlbum).then(clearForm)



  }

  const clearForm = () => {
    document.querySelector(".title_input").value = ""
    document.querySelector(".artist_input").value = ""
    document.querySelector(".rating_input").value = ""
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="hidden" />
      <input type="text" className="title_input" />
      <input type="text" className="artist_input" />
      <input type="range" min="0" max="5" className="rating_input" />
      <button className="form_button" >Submit</button>
    </form>
  )
}