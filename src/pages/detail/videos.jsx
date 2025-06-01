import { SplideSlide, Splide } from "@splidejs/react-splide";
import React from "react";
import ReactPlayer from "react-player";

const Videos = ({ videos }) => {

  console.log(videos);
  
  const isRender = videos && videos.length > 0;

  const videoBaseURL = "https://www.youtube.com/watch?v=";

  return isRender ? (
    <div className="mb-10">
      <h2 className="font-semibold text-lg md:text-xl my-5">Fragmanlar</h2>

      <Splide>
        {videos.map((video) => (
          <SplideSlide>
            <ReactPlayer
              url={videoBaseURL + video.key}
              width="100%"
              heigth="400px"
              controls
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  ) : (
    <div className="text-center mb-10 text-zinc-400">Fragmanlar Bulunamadı</div>
  );
};

export default Videos;
