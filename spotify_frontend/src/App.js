// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/hai" element={<div>hai</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
