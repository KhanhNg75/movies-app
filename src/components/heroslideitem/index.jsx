import React from "react";
import Button from "@mui/material/Button";

import { HeroSlide as H } from "styles";
import { Wrapper as W } from "styles";
import { Btn as B } from "styles";

import { useHistory } from "react-router";

import apiConfig from "api/apiConfig";

export const HeroSlideItem = (props) => {
  let hisrory = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = () => {
    console.log("aaa");
  };
  return (
    <H.HeroItems
      className={`${props.className}`}
      backgroundImage={`url(${background})`}
    >
      <W.Container>
        <H.HeroContent>
          <H.HeroInfor>
            <H.HeroTitle>{item.title}</H.HeroTitle>
            <H.HeroOverview>{item.overview}</H.HeroOverview>
            <H.HeroBtn>
              <B.Btn onClick={() => hisrory.push("/movie/" + item.id)}>
                Watch now
              </B.Btn>
              <B.BtnOutline onClick={setModalActive}>Trailer</B.BtnOutline>
            </H.HeroBtn>
          </H.HeroInfor>
          <H.HeroPoster>
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </H.HeroPoster>
        </H.HeroContent>
      </W.Container>
    </H.HeroItems>
  );
};
