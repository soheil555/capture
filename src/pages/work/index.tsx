import { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  slideAnimation,
} from "../../animations";
import { Hide } from "../../styles";
import useScroll from "../../hooks/useScroll";

const OurWork: NextPage = () => {
  const { element: element1, controls: controls1 } = useScroll();
  const { element: element2, controls: controls2 } = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Frame1 variants={slideAnimation} />
      <Frame2 variants={slideAnimation} />
      <Frame3 variants={slideAnimation} />
      <Frame4 variants={slideAnimation} />

      <Movie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link href="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src="/images/athlete-small.png"
              alt="athlete"
            />
          </Hide>
        </Link>
      </Movie>

      <Movie
        variants={fadeAnimation}
        ref={element1}
        animate={controls1}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link href="/work/the-racer">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src="/images/theracer-small.png"
              alt="theracer"
            />
          </Hide>
        </Link>
      </Movie>

      <Movie
        variants={fadeAnimation}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link href="/work/good-times">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src="/images/goodtimes-small.png"
              alt="goodtimes"
            />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: #a7ffe4;
`;

const Frame2 = styled(Frame1)`
  background-color: #ffd6ec;
`;

const Frame3 = styled(Frame1)`
  background-color: #ffa1cf;
`;

const Frame4 = styled(Frame1)`
  background-color: #ff74b1;
`;

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    color: white;
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    cursor: pointer;
  }
`;

export default OurWork;
