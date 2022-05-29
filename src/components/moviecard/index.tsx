import React from "react";
import { Link } from "react-router-dom";

import { Btn as B } from "styles";
import { Movie as M } from "styles";

import { category } from "api/tmdbApi";
import apiConfig from "api/apiConfig";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <M.MovieCard className={props.toggle ? "active" : " "}>
      <Link to={link}>
        <M.MovieCardImg backgroundImage={`url(${bg})`}>
          <B.Btn>
            <PlayArrowIcon />
          </B.Btn>
        </M.MovieCardImg>
        <h3>{item.title || item.name}</h3>
      </Link>
    </M.MovieCard>
  );
};
