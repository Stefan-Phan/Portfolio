import AiDetector1 from "../../assets/img/ai-detector-1.png";
import AiDetector2 from "../../assets/img/ai-detector-2.png";
import AiDetector3 from "../../assets/img/ai-detector-4.png";
import AiDetector4 from "../../assets/img/ai-detector-3.png";
import AiDetector5 from "../../assets/img/ai-detector-5.png";
import "./AIDetector.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const slideImages = [
  {
    src: AiDetector1,
    caption: "Slide 1",
  },
  {
    src: AiDetector2,
    caption: "Slide 2",
  },
  {
    src: AiDetector3,
    caption: "Slide 3",
  },
  {
    src: AiDetector4,
    caption: "Slide 3",
  },
  {
    src: AiDetector5,
    caption: "Slide 3",
  },
];

export default function AIDetector() {
  return (
    <div className="container text-center ai-detector">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="slide-container"
      >
        <Slide autoplay={false}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <img src={slideImage.src} alt="" />
            </div>
          ))}
        </Slide>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="title-and-download"
      >
        <div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 1 }}
          className="project-title"
        >
          AI DETECTOR
        </div>
        <div className="download-button">
          <a
            href="folders/AI Detector Report.zip"
            download="Stefan-AI_Detector_Report"
          >
            <button className="Btn">
              <svg
                className="svgIcon"
                viewBox="0 0 496 512"
                height="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
              <span className="text">2.04MB</span>
            </button>
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="project-purpose"
      >
        Safeguarding Academic Integrity
      </motion.div>
      <div className="d-flex justify-content-center">
        <div className="large-line "></div>
      </div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="project-desc"
      >
        <p>
          In the AI Detector project, I was responsible for developing a
          user-centered solution to address the misuse of generative AI in an
          educational setting. My role involved applying design thinking
          techniques, including creating personas, mind maps, and conducting
          interviews to understand the needs and pain points of users. I also
          contributed to ideating, prototyping, and testing the final AI-powered
          tool, ensuring it integrated seamlessly with the UniSA online
          framework while adhering to ethical guidelines and enhancing learning.
        </p>
      </motion.div>
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
          <p>Apr - Jun 2024</p>
        </div>
        <div className="col-12 col-sm-3">
          <h3>Tools</h3>
          <ul>
            <li>Figma</li>
            <li>Word</li>
          </ul>
        </div>
        <div className="col-12 col-sm-3">
          <h3>Team</h3>
          <p>Stefan Phan</p>
        </div>
        <div className="col-12 col-sm-3">
          <h3>Disciplines</h3>
          <ul>
            <li>Design Thinking</li>
            <li>Human Interface</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
