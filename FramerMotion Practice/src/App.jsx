import { Link, Route, Routes } from "react-router-dom"
import Project1 from "./components/Project1/index"
import Home from "./components/Home/index.jsx"
import Variants from "./components/Variants/index.jsx"
import KeyFrames from "./components/KeyFrames/index.jsx"
import Drag from "./components/Drag/index.jsx"
import Hover from "./components/Hover/index.jsx"
import Stagger from "./components/Sequencing_&_Staggering/index.jsx"


export default function App() {

  return (

   <div className="bg-[#000000a5] min-h-screen">
    <nav className="w-screen h-16 bg-gray-300 flex justify-center items-center gap-10">
      <Link to="/project1">Project1</Link>
      <Link to="/variants">Variants</Link>
      <Link to="/keyFrames">KeyFrames</Link>
      <Link to="/drag">Drag</Link>
      <Link to="/hover">Hover</Link>
      <Link to="/stagger">Stagger</Link>
       
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project1" element={<Project1/>}/>
      <Route path="/variants" element={<Variants/>}/>
      <Route path="/keyFrames" element={<KeyFrames/>}/>
      <Route path="/drag" element={<Drag/>}/>
      <Route path="/hover" element={<Hover/>}/>
      <Route path="/stagger" element={<Stagger/>}/>
    </Routes>
    </div>
  )
}