import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Homepage/index"
import First from "./components/First/index" 
import Container from "./components/Container/index" 

  import React from 'react'
  
  const App = () => {
    return (
      <div className="bg-[#111] min-h-screen">
    <nav className="bg-slate-400 w-screen h-20 flex gap-10 justify-evenly items-center">
      <Link to="/">Home</Link>
      <Link to="/first">First</Link>
      <Link to="/container">Container</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/first" element={<First/>}/>
      <Route path="/container" element={<Container/>}/>

    </Routes>
   </div>
    )
  }
  
  export default App
