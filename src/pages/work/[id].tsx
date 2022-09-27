import type { GetStaticPaths, GetStaticProps } from "next";
import { movieState, Movie } from "../../movieState";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: movieState.map((movie) => ({ params: { id: movie.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const movie = movieState.find((movie) => movie.id === params?.id);

  return {
    props: { movie },
  };
};

interface MovieDetailProps {
  movie: Movie;
}

const MovieDetail = ({ movie }: MovieDetailProps) => {
  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HeadLine>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt={movie.title} />
      </HeadLine>

      <Awards>
        {movie.awards.map((award) => (
          <Award
            key={award.title}
            title={award.title}
            description={award.description}
          />
        ))}
      </Awards>

      <ImageDisplay>
        <img src={movie.secondaryImg} alt={movie.title} />
      </ImageDisplay>
    </Details>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Award Component
interface AwardProps {
  title: string;
  description: string;
}

const Award = ({ title, description }: AwardProps) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
