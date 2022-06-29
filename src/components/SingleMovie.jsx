/** @format */

import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleMovie = ({ movie }) => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate("/MovieDetails/" + movie.imdbID);
  };
  return (
    <Card id="card">
      <Card.Img className="card-img" variant="top" src={movie.Poster} />

      <Card.Body className="text-center">
        <Card.Text className="card-title mt-2">{movie.Title}</Card.Text>
        <Button className=" mt-2" onClick={goToDetails}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleMovie;
