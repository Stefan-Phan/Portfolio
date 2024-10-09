import Stakeholder from "../../assets/img/stakeholdericon.png";
import UserStories from "../../assets/img/userstoryicon.png";
import Interview from "../../assets/img/interviewicon.png";
import Requirement from "../../assets/img/requirementicon.png";
import ActivityModeling from "../../assets/img/activitymodelingicon.png";
import UseCase from "../../assets/img/usecaseicon.png";
import BackEndImage from "../../assets/img/backendimage.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import "./GMPS.css";

export default function GMPS() {
  const cardsData = [
    {
      id: 1,
      image: Stakeholder,
      title: "STAKEHOLDERS",
    },
    {
      id: 2,
      image: UserStories,
      title: "USER STORIES",
    },
    {
      id: 3,
      image: Interview,
      title: "INTERVIEW",
    },
    {
      id: 4,
      image: UseCase,
      title: "USE CASE",
    },
    {
      id: 5,
      image: Requirement,
      title: "REQUIREMENTS",
    },
    {
      id: 6,
      image: ActivityModeling,
      title: "ACTIVITY MODELING",
    },
  ];

  return (
    <div className="container text-center gmps">
      <div className="description">
        <motion.h1
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
        >
          General Medical Practice System (GMPS)
        </motion.h1>
        <motion.h4
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
        >
          System Requirements Analyst & Backend Developer
        </motion.h4>
        <div className="d-flex justify-content-center">
          <div className="large-line "></div>
        </div>

        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
        >
          The General Medical Practice System (GMPS) is a comprehensive solution
          designed to streamline the management of medical practices. The
          project encompasses both the detailed analysis of system requirements
          and the development of a robust backend system to meet those
          requirements. As the lead System Requirements Analyst and Backend
          Developer, I played a pivotal role in both defining the functional
          aspects of the system and implementing them using a modern technology
          stack.
        </motion.p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="large-line "></div>
      </div>
      <motion.h3
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 1 }}
      >
        System Requirements Analyst
      </motion.h3>
      <div className="card-container container justify-content-center">
        <div className="row g-3">
          {cardsData.map((card) => (
            <div className="col-4" key={card.id}>
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="card"
              >
                <img
                  className="custom-card-img"
                  src={card.image}
                  alt={card.title}
                />
                <div className="card-body">
                  <h4 className="card-title">
                    <strong>{card.title}</strong>
                  </h4>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="large-line "></div>
      </div>
      <div className="backend-dev">
        <motion.h3
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
        >
          BACK<span>END</span> DEVELOPMENT
        </motion.h3>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
        >
          <img src={BackEndImage} className="img-fluid" />
        </motion.div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="large-line "></div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        className="row project-credit d-flex justify-content-center"
      >
        <div className="col-3">
          <h3>Timeline</h3>
          <p>Jun - Sep 2024</p>
        </div>
        <div className="col-3">
          <h3>Tools</h3>
          <ul>
            <li>Word</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Postman</li>
          </ul>
        </div>
        <div className="col-3">
          <h3>Team</h3>
          <p>Stefan Phan</p>
        </div>
        <div className="col-3">
          <h3>Disciplines</h3>
          <ul>
            <li>Implement front-end</li>
            <li>using ReactJS</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
