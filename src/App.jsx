import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/summarize/About";
import Fun from "./pages/summarize/Fun";
import Resume from "./pages/summarize/Resume";
import GameHub from "./pages/projects/GameHub";
import AIDetector from "./pages/projects/AIDetector";
import GMPS from "./pages/projects/GMPS";
import LittleLemon from "./pages/projects/LittleLemon";
import PreLoader from "./components/PreLoader/PreLoader";

export default function App() {
  return (
    <div className="App">
      <PreLoader />
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/game-hub" element={<GameHub />} />
            <Route path="/ai-detector" element={<AIDetector />} />
            <Route path="/gmps" element={<GMPS />} />
            <Route path="/little-lemon" element={<LittleLemon />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}
