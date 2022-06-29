/** @format */

import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { SpinnerInfinity } from "spinners-react";
import { useState } from "react";
import { useEffect } from "react";

const MovieGalleryOne = ({ genre }) => {
  /* state = {
    movies: [],
    isLoading: true,
  }; */

  const [movies, setMovies] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  /* componentDidMount = () => {
    this.fetchMovies(this.props.moviesGenre);
  }; */

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async () => {
    try {
      const url = "http://www.omdbapi.com/?apikey=3c00fe98&s=" + genre;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();

        console.log(data);

        /* this.setState({
          movies: data.Search,
          isLoading: false,
        }); */
        setMovies(data.Search);
        setIsLoading(false);
      } else {
        alert("API ERROR!");
      }
    } catch (error) {
      console.log(error);
      /* this.setState({ isLoading: false }); */
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1 className="text-center text-white">{genre} Movies</h1>
      <Row className="justify-content-center mt-3">
        {isLoading && (
          <SpinnerInfinity
            size={75}
            thickness={157}
            speed={85}
            color="rgba(172, 84, 57, 1)"
            secondaryColor="rgba(114, 57, 172, 0.44)"
          />
        )}
        {movies &&
          movies.map((movie) => (
            <Col key={movie.imdbID} xs={6} sm={3} md={2} className="mb-5">
              <SingleMovie movie={movie} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MovieGalleryOne;
