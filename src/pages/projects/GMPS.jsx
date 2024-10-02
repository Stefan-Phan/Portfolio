import { useState } from "react"; // Import useState
import Stakeholder from "../../assets/img/stakeholdericon.png";
import UserStories from "../../assets/img/userstoryicon.png";
import Interview from "../../assets/img/interviewicon.png";
import Requirement from "../../assets/img/requirementicon.png";
import ActivityModeling from "../../assets/img/activitymodelingicon.png";
import UseCase from "../../assets/img/usecaseicon.png";
import BackEndImage from "../../assets/img/backendimage.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Card from "react-bootstrap/Card";
import "./GMPS.css";

export default function GMPS() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardsData = [
    {
      id: 1,
      image: Stakeholder,
      title: "STAKEHOLDERS",
      hoverText:
        "Stakeholders are individuals or groups who have a vested interest in the project's success and are affected by its outcomes, including clients, team members, and community representatives.",
    },
    {
      id: 2,
      image: UserStories,
      title: "USER STORIES",
      hoverText:
        "User stories are descriptive narratives that detail specific user needs and tasks, helping to ensure that the development team understands the requirements from the user's perspective.",
    },
    {
      id: 3,
      image: Interview,
      title: "INTERVIEW",
      hoverText:
        "Interviews are structured discussions aimed at collecting detailed insights and feedback from users, allowing for a deeper understanding of their experiences and expectations.",
    },
    {
      id: 4,
      image: UseCase,
      title: "USE CASE",
      hoverText:
        "Use cases are comprehensive scenarios that outline how users will interact with the system, detailing the steps taken and the expected outcomes to inform design and functionality.",
    },
    {
      id: 5,
      image: Requirement,
      title: "REQUIREMENTS",
      hoverText:
        "Requirements are clear and detailed specifications that outline what the system must accomplish to meet user needs and business goals, serving as a foundation for development.",
    },
    {
      id: 6,
      image: ActivityModeling,
      title: "ACTIVITY MODELING",
      hoverText:
        "Activity modeling involves creating visual representations of processes and workflows within the system, helping to clarify tasks, responsibilities, and the flow of information.",
    },
  ];

  return (
    <div className="container text-center gmps">
      <div className="description">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 1 }}
        >
          <h1>General Medical Practice System (GMPS)</h1>
          <h4>System Requirements Analyst & Backend Developer</h4>
        </motion.div>
        <div className="d-flex justify-content-center">
          <div className="large-line "></div>
        </div>

        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 1 }}
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
        viewport={{ once: false, amount: 1 }}
      >
        System Requirements Analyst
      </motion.h3>
      <div className="card-container container justify-content-center">
        <div className="row">
          {cardsData.map(({ id, image, title, hoverText }) => (
            <Card
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                className="card-img"
                variant="top"
                src={hoveredCard === id ? null : image}
              />
              <Card.Body>
                {hoveredCard === id ? (
                  <p className="card-desc">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{hoverText}</Card.Text>
                  </p>
                ) : (
                  <Card.Title>{title}</Card.Title>
                )}
              </Card.Body>
            </Card>
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
          viewport={{ once: false, amount: 1 }}
        >
          BACK<span>END</span> DEVELOPMENT
        </motion.h3>
        <img src={BackEndImage} className="img-fluid" />
      </div>
      <div className="d-flex justify-content-center">
        <div className="large-line "></div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="row project-credit d-flex justify-content-center"
      >
        <div className="col-12 col-sm-3">
          <h3>Timeline</h3>
          <p>Jun - Sep 2024</p>
        </div>
        <div className="col-12 col-sm-3">
          <h3>Tools</h3>
          <ul>
            <li>Word</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Postman</li>
          </ul>
        </div>
        <div className="col-12 col-sm-3">
          <h3>Team</h3>
          <p>Stefan Phan</p>
        </div>
        <div className="col-12 col-sm-3">
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
