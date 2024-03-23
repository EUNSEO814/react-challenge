import styled from "styled-components";
import { motion, Variants, AnimatePresence, useScroll } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  IAPIResponse,
  getMovie,
  getPopular,
  makeBgPath,
  makeImagePath,
  IMovieDetail,
} from "../api";
import { useNavigate, useMatch, PathMatch, useParams } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const MovieImg = styled(motion.div)<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  width: 250px;
  height: 350px;
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
`;

const Title = styled.div`
  font-size: 18px;
  margin: 10px;
  font-weight: 700;
  color: #e5e5e5;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const MovieDetail = styled(motion.div)`
  position: absolute;
  width: 30vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: black;
`;

const ModalCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;
const ModalTitle = styled.h3`
  color: #fff;
  font-size: 32px;
  padding: 10px;
  position: relative;
  top: -66px;
`;

const ModalOverview = styled.p`
  padding: 20px;
  color: #fff;
  position: relative;
  top: -66px;
`;

const Svg = styled.svg`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 10px;
  right: 0;
  left: 485px;
  &:hover {
    cursor: pointer;
  }
`;

const ModalEtc = styled.div`
  padding: 4px 20px;
  color: #fff;
  position: relative;
  top: -66px;
`;
const imgVariants: Variants = {
  hover: {
    y: -20,
  },
};

const movieVariants: Variants = {
  initial: { scale: 0 },
  animate: (custom: number) => ({
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Home = () => {
  const { id } = useParams();
  // console.log("id", typeof id);
  const { data: popularData, isLoading } = useQuery<IAPIResponse>({
    queryKey: ["movies", "popular"],
    queryFn: getPopular,
  });
  // console.log("popularData", popularData);

  const { data } = useQuery<IMovieDetail>({
    queryKey: ["movies", "movieDetails", id],
    queryFn: () => getMovie(id!),
  });

  // console.log("data", data);

  // const { id } = useParams();

  const navigate = useNavigate();

  const onOverlayClicked = () => navigate("/");

  const moviePathMatch: PathMatch<string> | null = useMatch("movies/:id");
  // console.log("moviePathMatch", moviePathMatch);

  const clickedMovie =
    moviePathMatch?.params.id &&
    popularData?.results.find(
      (movie) => String(movie.id) === moviePathMatch?.params.id
    );

  console.log("clickedMovie", clickedMovie);
  const cardClicked = (movieId: number) => {
    navigate(`movies/${movieId}`);
  };

  const { scrollY } = useScroll();

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        {popularData?.results.map((movie, index) => (
          <Container
            variants={movieVariants}
            initial="initial"
            animate="animate"
            custom={index}
            key={movie.id}
            onClick={() => cardClicked(movie.id)}
            layoutId={movie.id.toString()}
          >
            <MovieImg
              bgphoto={makeBgPath(movie.poster_path)}
              variants={imgVariants}
              whileHover="hover"
            ></MovieImg>
            <Title>{movie.title}</Title>
          </Container>
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {moviePathMatch ? (
          <>
            <Overlay
              onClick={onOverlayClicked}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <MovieDetail
              layoutId={moviePathMatch.params.id}
              style={{ top: scrollY.get() + 100 }}
            >
              {clickedMovie && (
                <>
                  <Svg
                    onClick={onOverlayClicked}
                    data-slot="icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                    ></path>
                  </Svg>
                  <ModalCover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                        clickedMovie.backdrop_path
                      )})`,
                    }}
                  />
                  <ModalTitle>{data?.title}</ModalTitle>
                  <ModalOverview>{data?.overview}</ModalOverview>
                  <ModalEtc>
                    Budget: ${" "}
                    {data?.budget
                      ? new Intl.NumberFormat("en-US").format(
                          Number(data.budget)
                        )
                      : "0"}
                  </ModalEtc>
                  <ModalEtc>
                    Revenue: ${" "}
                    {data?.revenue
                      ? new Intl.NumberFormat("en-US").format(
                          Number(data.budget)
                        )
                      : "0"}
                  </ModalEtc>
                  <ModalEtc>Runtime: {data?.runtime} minutes</ModalEtc>
                  <ModalEtc>Rating: {data?.vote_average}</ModalEtc>
                  <ModalEtc>Homepage: {data?.homepage}</ModalEtc>
                </>
              )}
            </MovieDetail>
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Home;
