import { NextPage } from "next";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animations";
import styled from "styled-components";

const ContactUs: NextPage = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h1 variants={titleAnimation}>Contact Us</motion.h1>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send An Email</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  background: #fff;
  min-height: 90vh;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
