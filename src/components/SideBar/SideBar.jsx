import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./SideBar.css";
import {
  FaBars,
  FaHome,
  FaHospital,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { SiFunimation, SiReaddotcv } from "react-icons/si";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import { useState } from "react";
import { MdEmail } from "react-icons/md";

const routes = [
  {
    path: "/",
    name: "HOME",
    icon: <FaHome />,
  },
  {
    path: "/fun",
    name: "FUN",
    icon: <SiFunimation />,
  },
  {
    path: "/resume",
    name: "RESUME",
    icon: <SiReaddotcv />,
  },
  {
    path: "/game-hub",
    name: "GameHub",
    icon: <IoGameControllerSharp />,
  },
  {
    path: "/ai-detector",
    name: "AI Detector",
    icon: <FaRobot />,
  },
  {
    path: "/gmps",
    name: "GMPS",
    icon: <FaHospital />,
  },
  {
    path: "/little-lemon",
    name: "Little Lemon",
    icon: <IoRestaurant />,
  },
];

export default function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "250px" : "55px",
        }}
        className="sidebar"
      >
        <div className="top-section">
          {isOpen && <h1 className="logo">STEFAN</h1>}
          <div className="bars icon" onClick={() => toggle()}>
            <FaBars />
          </div>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              {route.name === "GameHub" && isOpen && (
                <>
                  <div class="hl"></div>
                  <h1 className="section-title">PROJECTS</h1>
                </>
              )}
              {route.name === "GameHub" && !isOpen && (
                <>
                  <div class="hl2"></div>
                </>
              )}
              <div className="link">
                <div className="icon">{route.icon}</div>
                {isOpen && <div className="link-text">{route.name}</div>}
              </div>
            </NavLink>
          ))}
        </section>
        <section className="contact-container">
          {isOpen && (
            <>
              <div class="hl"></div>
              <h1 className="section-title">CONTACT</h1>
            </>
          )}
          {!isOpen && (
            <>
              <div class="hl2"></div>
            </>
          )}
          <div className="contact">
            <a href="mailto:phany036@mymail.unisa.edu.au" class="link">
              <div className="icon">
                <MdEmail />
              </div>
              {isOpen && <div className="link-text">Mail</div>}
            </a>
            <a href="https://www.linkedin.com/in/hungphan005/" class="link">
              <div className="icon">
                <FaLinkedin />
              </div>
              {isOpen && <div className="link-text">LinkedIn</div>}
            </a>
            <a href="https://www.facebook.com/hungphan005/" class="link">
              <div className="icon">
                <FaFacebookSquare />
              </div>
              {isOpen && <div className="link-text">Facebook</div>}
            </a>
            <a href="https://www.instagram.com/_pnt.hung_/" class="link">
              <div className="icon">
                <FaInstagramSquare />
              </div>
              {isOpen && <div className="link-text">Instagram</div>}
            </a>
          </div>
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
}
