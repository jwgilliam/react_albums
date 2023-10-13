import "./AlbumForm.css"
import { useContext, useEffect } from 'react';
import { albumContext } from './AlbumProvider';

export default function AlbumForm() {

  const { addAlbum, selectedAlbum, setSelectedAlbum, editAlbum } = useContext(albumContext)

  useEffect(() => {
    selectedAlbum ? document.querySelector(".title_input").value = selectedAlbum.albumTitle : document.querySelector(".title_input").value = ""
  }, [selectedAlbum])




  const submitHandler = (event) => {
    event.preventDefault();

    if (selectedAlbum) {
      console.log(selectedAlbum)
      selectedAlbum.albumTitle = document.querySelector(".title_input").value
      selectedAlbum.albumArtist = document.querySelector(".artist_input").value
      selectedAlbum.albumRating = document.querySelector(".rating_input").value
      editAlbum(selectedAlbum)
        .then(clearForm)
      return
    }

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
    setSelectedAlbum()
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="hidden" />
      <label htmlFor="title_input">Title:</label>
      <input type="text" className="title_input" />

      <label htmlFor="artist_input">Artist:</label>
      <input type="text" className="artist_input" />

      <label htmlFor="rating_input">Rating:</label>
      <input type="range" min="0" max="5" className="rating_input" />

      <button className="form_button" >Submit</button>
    </form>
  )
}