import { useState, useEffect } from "react";

import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";

import { useParams } from "react-router";

import { Movie as M, Btn as B } from "styles";

import { MovieCard } from "components/moviecard";

import tmdbApi, { category, movieType, tType } from "api/tmdbApi";
import { Search } from "components/search";
import Loading from "components/loading";

export const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);

  const [toggle, setToggle] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    setTimeout(async () => {
      const getList = async () => {
        let response = null;
        if (keyword === undefined) {
          const params = {};
          switch (props.category) {
            case category.movie:
              response = await tmdbApi.getMoviesList(movieType.popular, {
                params,
              });
              break;
            default:
              response = await tmdbApi.getMoviesList(tType.top_rated, {
                params,
              });
          }
        } else {
          const params = {
            query: keyword,
          };
          response = await tmdbApi.search(props.category, { params });
        }
        setItems(response.results);
        setLoading(response.results);
        setTotalPage(response.total_pages);
      };
      getList();
    }, 3000);
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getMoviesList(tType.top_rated, {
            params,
          });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <M.MovieBar>
        <Search category={props.category} keyword={keyword} />
        <M.MovieBtn onClick={toggleBtn}>
          {toggle ? <ViewListIcon /> : <GridViewIcon />}
        </M.MovieBtn>
      </M.MovieBar>
      {loading && (
        <M.MovieGrid className={toggle ? "active" : " "}>
          {items.map((item, i) => (
            <MovieCard
              category={props.category}
              item={item}
              key={i}
              toggle={toggle}
            />
          ))}
        </M.MovieGrid>
      )}

      {!loading && <Loading />}

      {page < totalPage ? (
        <M.LoadMore>
          <B.BtnOutline onClick={loadMore}>Load more</B.BtnOutline>
        </M.LoadMore>
      ) : null}
    </>
  );
};
