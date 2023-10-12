import "./Album.css"
import { albumContext } from "./AlbumProvider"
import { useContext } from "react"

export default function Album({ album }) {
  const { deleteAlbum, setSelectedAlbum } = useContext(albumContext)

  const deleteHandler = () => {
    deleteAlbum(album)
  }

  const editHandler = () => {
    setSelectedAlbum(album)
  }

  return (
    <div className="album_card">
      <p>{album.albumTitle}</p>
      <p>{album.albumArtist}</p>
      <p>{album.albumRating}</p>
      <button className="delete_album" onClick={deleteHandler}>Delete</button>
      <button className="edit_album" onClick={editHandler}>Edit</button>

    </div>)
}

