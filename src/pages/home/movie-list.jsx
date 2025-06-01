import React, { useEffect, useState } from "react";
import api from "./../../utils/api";
import { baseImageURL } from "../../utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };
    api
      .get("/discover/movie", { params })
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 mt-8">{genre.name}</h1>
      <Splide options={{
        autoWidth: true,
        gap: "20px",
        pagination: false,
        type: "loop",
      }}>
        {movies?.map((movie, key) => (
          <SplideSlide key={key}>
            <Link to={`/movie/${movie.id}`}>
            <img src={baseImageURL + movie.poster_path} className="max-h-[300px] cursor-pointer rounded transition hover:scale-[1.05]"/>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
