import styled from "styled-components";

const DetailBanner = styled.div`
  height: 50vh;
  position: relative;
  background-image: ${(props) => props.backgroundImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      to top,
      var(--body-bg),
      rgba(var(--black), 0)
    );
  }
`;

const MovieContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1260px;
  margin: -200px auto 3px;
  position: relative;
  padding: 0 2rem;
`;

const MoviePoster = styled.div`
  flex: 1;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MoviePosterImage = styled.div`
  background-image: ${(props) => props.backgroundImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: var(--border-radius);
  padding-top: 165%;
`;

const MovieInfor = styled.div`
  width: 70%;
  padding-left: 2rem;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-left: 0;
  }
`;

const MovieTitle = styled.h1`
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 20px;
`;

const MovieGenres = styled.div`
  margin-bottom: 20px;
  & > * ~ * {
    margin-left: 0.5rem;
  }
`;

const MovieGenresItem = styled.span`
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--white);
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  font-weight: 600;
  background-color: var(--body-bg);
`;

export {
  DetailBanner,
  MovieContent,
  MoviePoster,
  MoviePosterImage,
  MovieInfor,
  MovieGenres,
  MovieTitle,
  MovieGenresItem,
};
