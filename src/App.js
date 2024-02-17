import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skill from "./Components/Skills.js"

function App() {
  return (
<div>

  <BrowserRouter>
  <Navbar/>

  <Routes>
<Route exact path="/" element={<About/>} />
<Route exact path="/contact" element={<Contact/>} />
<Route exact path="/projects" element={<Projects/>} />
<Route exact path="/skill" element={<Skill/>} />


  </Routes>
   </BrowserRouter>
</div>
  );
}

export default App;
