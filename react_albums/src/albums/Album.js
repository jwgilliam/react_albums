import "Album.css"

export default function Album(props) {
  <div className="album_card">
    <p>{props.title}</p>
    <p>{props.artist}</p>
    <p>{props.rating}</p>

  </div>
}