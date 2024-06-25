// import logo from './logo.svg';
import {useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHome from './routes/LoggedInHome';
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import songContext from "./contexts/songContext";
import SearchPage from "./routes/SearchPage";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
    const [soundPlayed, setSoundPlayed] = useState(null);
    const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="App w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          <songContext.Provider
                        value={{
                            currentSong,
                            setCurrentSong,
                            soundPlayed,
                            setSoundPlayed,
                            isPaused,
                            setIsPaused,
                        }}
                    >
          <Routes>
            {/* <Route path="/" element={<div>hello</div>} /> */}
            {/* <Route path="/home" element={<Home></Home>} /> */}
            <Route path="/" element={<LoggedInHome></LoggedInHome>} />
            <Route path="/upload-song" element={<UploadSong />} />
            <Route path="/my-music" element={<MyMusic />} />
            <Route path="/search" element={<SearchPage />} />
            {/* <Route path="/library" element={<Library />} /> */}
            {/* <Route
              path="/playlist/:playlistId"
              element={<SinglePlaylistView />}
            /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          </songContext.Provider>
        ) : (
          <Routes>
            <Route path="/home" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
