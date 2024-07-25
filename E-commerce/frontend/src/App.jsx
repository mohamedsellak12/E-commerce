import { Link, Navigate, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import User from "./components/User"
import ProtectedRoute from "./components/Protected";
import Logout from "./components/Logout";

function App() {
 
  const gettoken=localStorage.getItem('auth_token');
  console.log(gettoken)

  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user" element={<ProtectedRoute children={<User/>}/>}/>
        <Route path="/logout" element={<ProtectedRoute children={<Logout/>}/>}/>

      </Routes>
    </>
  )
}

export default App
