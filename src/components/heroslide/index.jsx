import React, { useState, useEffect } from "react";

import SwiperCore, { EffectFade, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import tmdbApi, { movieType } from "api/tmdbApi";

import { HeroSlide as H } from "styles";
import { HeroSlideItem } from "components/heroslideitem/index";
import Loading from "components/loading";

// install Swiper modules
SwiperCore.use([Navigation, EffectFade]);

export const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const getMovies = async () => {
        const params = { page: 1 };
        try {
          const response = await tmdbApi.getMoviesList(movieType.popular, {
            params,
          });
          setMovieItems(response.results.slice(1, 6));
          setLoading(response.results.slice(1, 6));
        } catch {
          console.log("error");
        }
      };
      getMovies();
    }, 3000);
  }, []);

  return (
    <H.HeroSlide>
      {loading && (
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
      )}
      {!loading && <Loading />}
    </H.HeroSlide>
  );
};
