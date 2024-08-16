import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Homepage/index"

  import React from 'react'
  
  const App = () => {
    return (
      <div>
    <nav className="bg-slate-400 w-screen h-20">
      <Link to="/">Home</Link>
    </nav>
    <Routes>
      <Route to="/" element={<Home/>}/>

    </Routes>
   </div>
    )
  }
  
  export default App
