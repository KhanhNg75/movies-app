import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";

import { category } from "api/tmdbApi";

import { Btn as B, Movie as M } from "styles";

export const Search = (props) => {
  const history = useHistory();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      history.push(`/${category[props.category]}/search/${keyword}`);
      setKeyword("");
    }
  }, [keyword, props.category, history]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <M.MovieSearch>
      <M.MovieInput
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <B.BtnSmall onClick={goToSearch}>Search</B.BtnSmall>
    </M.MovieSearch>
  );
};
