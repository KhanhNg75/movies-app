import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeroSlide as H, Wrapper as W, Btn as B } from "styles";

import { useHistory } from "react-router";

import apiConfig from "api/apiConfig";

export const HeroSlideItem = (props) => {
  let hisrory = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

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
            </H.HeroBtn>
          </H.HeroInfor>
          <H.HeroPoster>
            <LazyLoadImage alt="" src={apiConfig.w500Image(item.poster_path)} />
            {/* <img src={apiConfig.w500Image(item.poster_path)} alt="" /> */}
          </H.HeroPoster>
        </H.HeroContent>
      </W.Container>
    </H.HeroItems>
  );
};
