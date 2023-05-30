import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./components/Project";

function App() {
  return (

    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>

  );
}

export default App;
