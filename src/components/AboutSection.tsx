import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animations";
import Wave from "./Wave";

export default function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </Description>

      <Wave />

      <Image>
        <motion.img
          variants={photoAnimation}
          alt="home"
          src="/images/home1.png"
        />
      </Image>
    </About>
  );
}
