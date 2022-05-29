import React, { useState, useEffect } from "react";
import { Movie as M } from "styles";

import tmdbApi, { category } from "api/tmdbApi";

import { SwiperSlide, Swiper } from "swiper/react";
import { MovieCard } from "components/moviecard";
import Loading from "components/loading";

export const MovieList = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const getList = async () => {
        let response = null;
        const params = {};
        if (props.type !== "similar") {
          switch (props.category) {
            case category.movie:
              response = await tmdbApi.getMoviesList(props.type, { params });
              break;
            default:
              response = await tmdbApi.getTvList(props.type, { params });
          }
        } else {
          response = await tmdbApi.similar(props.category, props.id);
        }
        setItems(response.results);
        setLoading(response.results);
      };
      getList();
    }, 3000);
  }, []);
  return (
    <>
      {loading && (
        <M.MovieList>
          <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <MovieCard item={item} category={props.category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </M.MovieList>
      )}

      {!loading && <Loading />}
    </>
  );
};
