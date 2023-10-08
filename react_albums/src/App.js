import './App.css';
import AlbumList from './albums/AlbumList';
import AlbumForm from './albums/AlbumForm';
import { AlbumProvider } from './albums/AlbumProvider';

function App() {
  return (
    <AlbumProvider>
      <AlbumList />
      <AlbumForm />
    </AlbumProvider>
  );
}

export default App;
