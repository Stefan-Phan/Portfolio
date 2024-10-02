import { Route, Routes, useLocation } from "react-router-dom";
import About from "../../pages/summarize/About";
import Fun from "../../pages/summarize/Fun";
import Resume from "../../pages/summarize/Resume";
import GameHub from "../../pages/projects/GameHub";
import AIDetector from "../../pages/projects/AIDetector";
import GMPS from "../../pages/projects/GMPS";
import LittleLemon from "../../pages/projects/LittleLemon";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/game-hub" element={<GameHub />} />
        <Route path="/ai-detector" element={<AIDetector />} />
        <Route path="/gmps" element={<GMPS />} />
        <Route path="/little-lemon" element={<LittleLemon />} />
      </Routes>
    </AnimatePresence>
  );
}
