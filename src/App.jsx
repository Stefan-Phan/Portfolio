import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";

import PreLoader from "./components/PreLoader/PreLoader";
import AnimatedRoutes from "./components/Animated/AnimatedRoutes";

export default function App() {
  return (
    <div className="App">
      <PreLoader />
      <BrowserRouter>
        <SideBar>
          <AnimatedRoutes />
        </SideBar>
      </BrowserRouter>
    </div>
  );
}
