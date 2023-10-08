import "./Album.css"

export default function Album({ album }) {
  return (
    <div className="album_card">
      <p>{album.albumTitle}</p>
      <p>{album.albumArtist}</p>
      <p>{album.albumRating}</p>

    </div>)
}

