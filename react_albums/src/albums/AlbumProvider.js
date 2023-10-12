import { createContext, useEffect, useState } from "react";

export const albumContext = createContext()

export function AlbumProvider(props) {
  const [albums, setAlbums] = useState([])
  const [selectedAlbum, setSelectedAlbum] = useState()

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

  const editAlbum = (album) => {
    return fetch(`http://localhost:8088/albums/${album.id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(album)
    })
      .then(getAlbums)
  }

  return (
    <albumContext.Provider value={{ albums, addAlbum, deleteAlbum, editAlbum }}>{props.children}</albumContext.Provider>
  )
}