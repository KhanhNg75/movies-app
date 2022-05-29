import React from "react";

import { Title } from "components/title";
import { useParams } from "react-router";
import { category as cate } from "api/tmdbApi";

import { Wrapper as W } from "styles";
import { MovieGrid } from "components/moviegrid";

function Catalog() {
  const { category } = useParams();
  return (
    <>
      <Title>{category === cate.movie ? "Now Playing" : "Top Rated"}</Title>
      <W.Container>
        <W.Section>
          <MovieGrid category={category} />
        </W.Section>
      </W.Container>
    </>
  );
}

export default Catalog;
