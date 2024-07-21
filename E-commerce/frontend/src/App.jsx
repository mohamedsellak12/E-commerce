import { Link, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
 

  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
