import { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../../animations";

export default function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>S</span>
        <span>T</span>
        <span>E</span>
        <span>F</span>
        <span>A</span>
        <span>N</span>
      </div>
    </div>
  );
}
