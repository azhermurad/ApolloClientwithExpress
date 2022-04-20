import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import AllSongsPage from "./pages/AllSongsPage";
import { Link, Route, Routes } from "react-router-dom";
import CreateNewSong from "./pages/CreateSongPage";
import SingleSongDetail from "./pages/SongDetailPage";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<AllSongsPage />} />
          <Route path="/new-song" element={<CreateNewSong />} />
          <Route path="/songs/:id" element={<SingleSongDetail />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
