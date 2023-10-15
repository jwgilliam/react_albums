import "./Album.css"
import { albumContext } from "./AlbumProvider"
import { useContext } from "react"

export default function Album(props) {
  const { deleteAlbum, setSelectedAlbum } = useContext(albumContext)

  const deleteHandler = () => {
    deleteAlbum(props.album)
  }

  const editHandler = () => {
    setSelectedAlbum(props.album)
    //console.log(props.album)
  }

  return (
    <div className="album_card">
      <p>{props.album.albumTitle}</p>
      <p>{props.album.albumArtist}</p>
      <p>{props.album.albumRating}</p>
      <button className="delete_album" onClick={deleteHandler}>Delete</button>
      <button className="edit_album" onClick={editHandler}>Edit</button>

    </div>)
}

