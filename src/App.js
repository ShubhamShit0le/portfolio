import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
