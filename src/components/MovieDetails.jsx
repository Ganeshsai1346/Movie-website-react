/** @format */

import { useState } from "react";
import { useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const elementId = params.elementId;
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3c00fe98&i=" + elementId
      );

      if (response.ok) {
        const movies = await response.json();

        setMovieDetails(movies);
      } else {
        alert("Something happened!");
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <div className="text-center lists mt-5">
      <ListGroup>
        {movieDetails && (
          <>
            <ListGroupItem>{movieDetails.Title}</ListGroupItem>
            <ListGroupItem>{movieDetails.Year}</ListGroupItem>
            <ListGroupItem>{movieDetails.Actors}</ListGroupItem>
            <ListGroupItem>{movieDetails.Genre}</ListGroupItem>
            <ListGroupItem>{movieDetails.Awards}</ListGroupItem>
          </>
        )}
      </ListGroup>
    </div>
  );
};

export default MovieDetails;
