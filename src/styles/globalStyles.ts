import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  :root{
    --body-bg: #0f0f0f;
    --main-color: #ff0000;
    --txt-color: #fff;

    --white: #fff;
    --black: #000;

    --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    --header-height: 8rem;
    --header-shrink-height: 5rem;
    --border-radius: 30px;

    --mobile-width: 600px;
    --tablet-width: 1024px;

    --font-family: "Montserrat", sans-serif;
  }

  html {
    font-size: 100%;

    @media only screen and (max-width: 1024px) {
      font-size: 80%;
    }

    @media only screen and (max-width: 600px) {
      font-size: 60%;
    }
  }

  body {
    font-family: var(--font-family);
    font-weight: 400;
    line-height: 1.5;

    background-color: var(--body-bg);
    color: var(--txt-color);

    @media only screen and (max-width: 600px) {
      margin-bottom: 3rem;
    }
  }

  a {
    text-decoration: none;
    color: unset;
  }

  @media (hover: hover) {
    a:hover {
      color: var(--main-color);
    }
  }

  button,
  input {
    outline: 0;
  }

  ul {
    list-style-type: none;
  }

  img {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  button {
    cursor: pointer;
    font-family: var(--font-family);
}

`;

export default GlobalStyle;
