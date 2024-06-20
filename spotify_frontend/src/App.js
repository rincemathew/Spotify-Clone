// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './routes/Login';

function App() {
  return (
    <div className="App w-screen h-screen">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
