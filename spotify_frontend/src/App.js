// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './routes/Login';
import SignUp from './routes/SignUp';

function App() {
  return (
    <div className="App w-screen h-screen font-poppins">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
