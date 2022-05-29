import React from "react";
import { Link } from "react-router-dom";
import { HeroSlide } from "components/heroslide";
import { MovieList } from "components/movielist";

import { Wrapper as W } from "styles";
import { Btn as B } from "styles";

import { category, movieType, tType } from "api/tmdbApi";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <W.Container>
        <W.Section>
          <W.SectionHeader>
            <h2>Now Playing</h2>
            <Link to="/movie">
              <B.BtnSmall>View more</B.BtnSmall>
            </Link>
          </W.SectionHeader>
          <MovieList category={category.movie} type={movieType.popular} />
        </W.Section>
        <W.Section>
          <W.SectionHeader>
            <h2>Top Rated</h2>
            <Link to="/top">
              <B.BtnSmall>View more</B.BtnSmall>
            </Link>
          </W.SectionHeader>
          <MovieList category={category.movie} type={tType.top_rated} />
        </W.Section>
      </W.Container>
    </>
  );
};
export default Home;
