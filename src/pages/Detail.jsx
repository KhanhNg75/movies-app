import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "api/tmdbApi";
import apiConfig from "api/apiConfig";

import { DetailCss as D, Wrapper as W } from "styles";

import { MovieList } from "components/movielist";

function Detail() {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <D.DetailBanner
            backgroundImage={`url(${apiConfig.originalImage(
              item.backdrop_path || item.poster_path
            )})`}
          ></D.DetailBanner>
          <W.Container>
            <D.MovieContent>
              <D.MoviePoster>
                <D.MoviePosterImage
                  backgroundImage={`url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`}
                ></D.MoviePosterImage>
              </D.MoviePoster>
              <D.MovieInfor>
                <D.MovieTitle>{item.title || item.name}</D.MovieTitle>
                <D.MovieGenres>
                  {item.genres &&
                    item.genres
                      .slice(0, 5)
                      .map((genre, i) => (
                        <D.MovieGenresItem key={i}>
                          {genre.name}
                        </D.MovieGenresItem>
                      ))}
                </D.MovieGenres>
                <p className="overview">{item.overview}</p>
              </D.MovieInfor>
            </D.MovieContent>
          </W.Container>
          <W.Container>
            <W.Section>
              <W.SectionHeader>
                <h2>Similar</h2>
              </W.SectionHeader>
              <MovieList category={category} type="similar" id={item.id} />
            </W.Section>
          </W.Container>
        </>
      )}
    </>
  );
}

export default Detail;
