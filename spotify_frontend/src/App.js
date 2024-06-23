// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Home from './routes/Home';
import {useCookies} from "react-cookie";

function App() {

  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="App w-screen h-screen font-poppins">
       <BrowserRouter>
       {cookie.token? (
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="*" element={<Navigate to='/home'/>} />
        </Routes>
       ):(
         <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="*" element={<Navigate to='/login'/>} />
        </Routes>
       )}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
