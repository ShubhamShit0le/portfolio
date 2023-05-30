import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
