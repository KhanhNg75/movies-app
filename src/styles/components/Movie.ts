import styled from "styled-components";
import { Btn, BtnSmall } from "./Btn";

const MovieList = styled.div`
  .swiper-slide {
    width: 15%;

    @media only screen and (max-width: 1024px) {
      width: 30%;
    }

    @media only screen and (max-width: 600px) {
      width: 40%;
    }
  }
`;

const MovieBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const MovieBtn = styled.div``;

const MovieCardImg = styled.div`
  position: relative;
  background-image: ${(props) => props.backgroundImage};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 160%;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--black);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: var(--border-radius);
  }

  ${Btn} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 0.8;
    }
    ${Btn} {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const MovieCard = styled.div`
  &.active {
    margin-bottom: 30px;
    ${MovieCardImg} {
      width: 100%;
      padding-top: 300px;
      background-position: center;
    }
    h3 {
      text-align: center;
    }
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 3rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  &.active {
    display: block;
  }
`;

const MovieInput = styled.input`
  border: 0;
  background-color: var(--black);
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: var(--border-radius);
  color: var(--txt-color);
  font-family: var(--font-family);
`;

const MovieSearch = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  ${MovieInput} {
    width: 100%;
    padding-right: 8rem;
  }

  ${BtnSmall} {
    position: absolute;
    right: 0;
    top: 2px;

    @media only screen and (max-width: 600px) {
      right: 1px;
      top: 1px;
    }
  }
`;

const LoadMore = styled.div`
  text-align: center;
`;

export {
  MovieBar,
  MovieList,
  MovieCard,
  MovieCardImg,
  MovieGrid,
  MovieSearch,
  MovieInput,
  LoadMore,
  MovieBtn,
};
