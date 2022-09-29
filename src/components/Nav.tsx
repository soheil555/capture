import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Nav() {
  const { pathname } = useRouter();

  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>

      <ul>
        <li>
          <Link href="/" scroll={false}>
            1. About Us
          </Link>
          <Line
            initial={{ width: "0rem" }}
            animate={{ width: pathname === "/" ? "6rem" : "0rem" }}
            transition={{ duration: 1 }}
          />
        </li>
        <li>
          <Link href="/work" scroll={false}>
            2. Our Work
          </Link>
          <Line
            initial={{ width: "0rem" }}
            animate={{ width: pathname === "/work" ? "6rem" : "0rem" }}
            transition={{ duration: 1 }}
          />
        </li>
        <li>
          <Link href="/contact-us" scroll={false}>
            3. Contact Us
          </Link>
          <Line
            initial={{ width: "0rem" }}
            animate={{ width: pathname === "/contact-us" ? "6rem" : "0rem" }}
            transition={{ duration: 1 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  position: absolute;
  bottom: -40%;
  left: 65%;
  width: 0rem;
  height: 0.25rem;
  background: #23d997;
`;
