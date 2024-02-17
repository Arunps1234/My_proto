import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './Components/About';
import Skill from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  return (
<div>

  <BrowserRouter>
  <Navbar/>

  <Routes>
<Route path="/" element={<About/>} />
<Route path="/skill" element={<Skill/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/projects" element={<Projects/>} />


  </Routes>
   </BrowserRouter>
</div>
  );
}

export default App;
