import styled from "styled-components";

const HeroSlide = styled.div`
  margin-bottom: 3rem;

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--main-color);
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroInfor = styled.div`
  width: 55%;
  padding: 0 3rem;
  position: relative;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  & > * ~ * {
    margin-top: 3rem;
  }
`;

const HeroPoster = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  img {
    width: 400px;
    border-radius: $border-radius;
    box-shadow: $box-shadow;

    transform: scale(0);
    transition: transform 0.7s ease;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const HeroTitle = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;

  @media only screen and (max-width: 1024px) {
    font-size: 4rem;
  }
`;

const HeroOverview = styled.div`
  font-weight: 700;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

const HeroBtn = styled.div`
  margin-left: 1rem;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

const HeroItems = styled.div`
  padding: 9rem 0;
  width: 100%;
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
    background-image: linear-gradient(to top, var(--body-bg), rgba($black, 0));
  }

  &.active ${HeroPoster} {
    img {
      transform: scale(1);
    }
  }

  &.active ${HeroTitle}, &.active ${HeroOverview}, &.active ${HeroBtn} {
    opacity: 1;
    transform: translateY(0);
  }

  &.active ${HeroTitle} {
    transition-delay: 0.3s, 0.3s;
  }

  &.active ${HeroOverview} {
    transition-delay: 0.6s, 0.6s;
  }

  &.active ${HeroBtn} {
    transition-delay: 0.9s, 0.9s;
  }
`;

export {
  HeroSlide,
  HeroItems,
  HeroContent,
  HeroInfor,
  HeroPoster,
  HeroBtn,
  HeroTitle,
  HeroOverview,
};
