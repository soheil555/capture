import { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";

const OurWork: NextPage = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link href="/work/the-athlete">
          <img src="/images/athlete-small.png" alt="athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link href="/work/the-racer">
          <img src="/images/theracer-small.png" alt="theracer" />
        </Link>
      </Movie>

      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link href="/work/good-times">
          <img src="/images/goodtimes-small.png" alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
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
