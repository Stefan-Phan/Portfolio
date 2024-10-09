import "./About.css";
import Typewriter from "../../components/Typewriter/Typewriter";
import "bootstrap/dist/css/bootstrap.min.css";
import myself_2 from "../../assets/img/myself_2.jpeg";
import campusCityWest from "../../assets/img/campus_cityw.jpg";
import basketball1 from "../../assets/img/basketball_1.png";
import basketball2 from "../../assets/img/basketball_4.png";
import basketball3 from "../../assets/img/basketball_3.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function About() {
  return (
    <div className="container text-center about-section">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <h1>NGUYEN TUAN HUNG PHAN</h1>
        <h4>STEFAN</h4>
        <Typewriter
          toRotate={["Back End Developer", "Software Engineering"]}
          period={3000}
        />
      </motion.div>
      <div className="row information mt-5">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-12 col-lg-5 d-flex align-self-center justify-content-center stefan-image"
        >
          <img
            src={myself_2}
            className="img-fluid"
            alt="Stefan image at Adelaide, South Australia"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-12 col-lg-7"
        >
          <p className="title">INFO</p>
          <p className="introduction">
            I’m a student living in Adelaide, Australia. From a young age, I’ve
            been deeply fascinated by technology, always believing that it has
            the potential to shape a new and better world. My journey into
            coding began in secondary school, where I was first introduced to
            Pascal. The structured logic and the way I could communicate with a
            machine through code immediately captured my interest. It was as if
            I had discovered a new language, one that allowed me to bring ideas
            to life through the screen. <br />
            <br /> As I progressed through school, my passion for coding only
            grew stronger. I found myself drawn to the problem-solving aspect,
            the thrill of debugging, and the satisfaction of seeing a program
            run successfully. However, it wasn't until I took a half-year gap to
            explore different interests that I truly understood how much coding
            meant to me. During this time, I dabbled in various fields, from
            design to mathematics, but nothing resonated with me as much as the
            world of coding did. <br />
            <br /> This period of exploration solidified my love for technology
            and the art of programming. I began to dive deeper into different
            languages and frameworks, learning everything I could—from the
            intricacies of algorithms to the principles of software development.
            Each new concept I mastered felt like unlocking another level in a
            vast, complex game. What I love most about coding is its limitless
            potential. It’s not just about writing lines of code; it’s about
            creating solutions, innovating, and constantly learning. I’m excited
            to continue my journey in the tech world, eager to see how I can
            contribute to shaping the future through the power of code.
          </p>
        </motion.div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="large-line "></div>
      </div>
      <div className="row information">
        <div className="col-12 col-lg-5">
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="title"
          >
            EDUCATION
          </motion.p>
          <div className="university-section">
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="uni-name"
            >
              UNIVERSY OF SOUTH AUSTRALIA
            </motion.p>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="degree"
            >
              Bachelor of Software Engineering
            </motion.p>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              Studying Software Engineer at the University of South Australia
              was challenging at first, especially being abroad, but the
              rewarding hands-on experience and global perspective made it all
              worthwhile.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-12 col-lg-5 d-flex align-self-center justify-content-center campus-image"
        >
          <img
            src={campusCityWest}
            className="img-fluid"
            alt="City Campus UNISA"
          />
        </motion.div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="large-line "></div>
      </div>
      <div className="row information">
        <div className="col-12 col-lg-5 d-flex flex-column justify-content-center mb-4">
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="title"
          >
            THINGS I LOVE TO DO
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            I love playing basketball, whether it's competing in a game or just
            shooting hoops with friends for fun.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="col-12 col-lg-5 d-flex align-self-center justify-content-center basketball-images"
        >
          <div className="grow grow-1">
            <img src={basketball1} />
          </div>
          <div className="grow grow-2">
            <img src={basketball2} />
          </div>
          <div className="grow grow-3">
            <img src={basketball3} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
