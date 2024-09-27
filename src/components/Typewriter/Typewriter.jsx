import React, { useEffect, useRef } from "react";
import "./Typewriter.css";

const Typewriter = ({ toRotate, period }) => {
  const el = useRef(null);
  let loopNum = 0;
  let txt = "";
  let isDeleting = false;

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    // Typing and deleting logic
    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }

    // Update HTML content
    if (el.current) {
      el.current.innerHTML = `<span class="wrap">${txt}</span>`;
    }

    // Adjust speed
    let delta = isDeleting ? 100 : 150;

    // Pause after the full text is typed out
    if (!isDeleting && txt === fullTxt) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      loopNum++;
      delta = 500;
    }

    setTimeout(tick, delta);
  };

  useEffect(() => {
    tick();
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  }, []); // Run once on mount

  return <h5 className="typewrite" ref={el}></h5>;
};

export default Typewriter;
