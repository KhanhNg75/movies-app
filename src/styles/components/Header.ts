import styled from "styled-components";

const Header = styled.div`
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: height 0.3s ease, background-color 0.3s ease;

  &.shrink {
    height: var(--header-shrink-height);
    background-color: var(--body-bg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 2rem;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    width: 50px;

    @media only screen and (max-width: 600px) {
      width: 30px;
      margin-right: 0;
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;

  & > * ~ * {
    margin-left: 2rem;
  }

  @media only screen and (max-width: 600px) {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: $body-bg;
    padding: 0 2rem;
    box-shadow: $box-shadow;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * ~ * {
      margin-left: 0;
    }
  }
`;

const NavItem = styled.li`
  padding: 5px 0;
  font-weight: 700;
  position: relative;
  font-size: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    transition: width 0.5s ease;
    height: 2px;
    background-color: var(--main-color);
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;

export { Header, Wrapper, Logo, Nav, NavItem };
