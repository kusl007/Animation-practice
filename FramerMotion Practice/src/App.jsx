import { Link, Route, Routes } from "react-router-dom"
import Project1 from "./components/Project1/index"
import Home from "./components/Home/index.jsx"
import Variants from "./components/Variants/index.jsx"
import KeyFrames from "./components/KeyFrames/index.jsx"


export default function App() {

  return (

   <div className="bg-[#000000a5] min-h-screen">
    <nav className="w-screen h-16 bg-gray-300 flex justify-center items-center gap-10">
      <Link to="/project1">Project1</Link>
      <Link to="/variants">Variants</Link>
      <Link to="/keyFrames">KeyFrames</Link>
       
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project1" element={<Project1/>}/>
      <Route path="/variants" element={<Variants/>}/>
      <Route path="/keyFrames" element={<KeyFrames/>}/>
    </Routes>
    </div>
  )
}