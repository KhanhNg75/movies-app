import React from "react";
import { Link } from "react-router-dom";
import { HeroSlide } from "components/heroslide";

import { Wrapper as W } from "styles";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <W.Container>
        <W.Section>
          <W.SectionHeader>
            <h2>Trending Movies</h2>
            <Link to="/movie">
              {/* <OutlineButton className="small">View more</OutlineButton> */}
            </Link>
          </W.SectionHeader>
        </W.Section>
      </W.Container>
    </>
  );
};
export default Home;
