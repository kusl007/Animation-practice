import { Link, Route, Routes } from "react-router-dom"
import Project1 from "./components/Project1/index"
import Home from "./components/Home/index.jsx"

export default function App() {

  return (

   <div>
    <nav className="w-screen h-16 bg-red-100 flex justify-center items-center gap-10">
      <Link to="/project1">Project1</Link>
       
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project1" element={<Project1/>}/>
    </Routes>
    </div>
  )
}