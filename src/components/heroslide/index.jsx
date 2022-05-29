import React, { useState, useEffect } from "react";

import SwiperCore, { EffectFade, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import tmdbApi, { movieType } from "api/tmdbApi";

import { HeroSlide as H } from "styles";
import { HeroSlideItem } from "components/heroslideitem/index";

// install Swiper modules
SwiperCore.use([Navigation, EffectFade]);

export const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 6));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <H.HeroSlide>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))} */}
    </H.HeroSlide>
  );
};
