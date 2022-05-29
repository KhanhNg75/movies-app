import React from "react";

import { Title as T } from "styles";
import bg from "assets/footer-bg.jpg";

export const Title = (props) => {
  return (
    <T.Title backgroundImage={`url(${bg})`}>
      <h2>{props.children}</h2>
    </T.Title>
  );
};
