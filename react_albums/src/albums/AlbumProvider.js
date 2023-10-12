import { createContext, useEffect, useState } from "react";

export const albumContext = createContext()

export function AlbumProvider(props) {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums()

  }, [])

  const getAlbums = () => {
    return fetch("http://localhost:8088/albums")
      .then((response) => response.json())
      .then((response) => setAlbums(response))

  }

  const addAlbum = (album) => {
    return fetch("http://localhost:8088/albums", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(album)
    })
      .then(getAlbums)
  }

  const deleteAlbum = (album) => {
    return fetch(`http://localhost:8088/albums/${album.id}`, {
      method: "Delete"
    })
      .then(getAlbums)
  }

  return (
    <albumContext.Provider value={{ albums, addAlbum, deleteAlbum }}>{props.children}</albumContext.Provider>
  )
}