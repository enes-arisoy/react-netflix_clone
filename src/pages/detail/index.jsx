import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../../utils/api";
import Buttons from "./button";
import Banner from "./banner";
import Actors from "./actors";
import Videos from "./videos";
import Content from "./content";
import Loader from './../../components/loader/index';

const Detail = () => {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  // useParams, URL'deki dinamik verileri yakalamak için en yaygın ve kolay yoldur. Routing yapan bileşen içinde direkt olarak useParams kullanmak genellikle en temiz yaklaşımdır.
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits, videos",
    };

    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error message={error} />;
  if (!movie) return <Loader />;
  return (
    <div>
      <Buttons movie={movie} />
      <Banner movie={movie} />
      <Content movie={movie} />
      <Actors cast={movie.credits.cast} />
      <Videos videos={movie.videos?.results} />
    </div>


    
  );
  
};

export default Detail;
