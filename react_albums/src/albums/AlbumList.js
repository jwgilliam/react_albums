import "./AlbumList.css"
import Album from "./Album"
import { albumContext } from "./AlbumProvider"
import { useContext } from "react"

export default function AlbumList() {
  const { albums } = useContext(albumContext)
  return (
    <div className="album_list">
      {albums.map((album) => {
        return <Album albumTitle={album.albumTitle} albumArtist={album.albumArtist} albumRating={album.albumRating} key={album.id} />
      })}
    </div>
  )
}