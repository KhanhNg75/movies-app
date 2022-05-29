import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Header as H } from "styles";
import { Wrapper as W } from "styles";

import logo from "../../assets/tmovie.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Now Playing",
    path: "/movie",
  },
  {
    display: "Top Rated",
    path: "/top",
  },
];

export const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <H.Header ref={headerRef}>
      <W.Container>
        <H.Wrapper>
          <H.Logo>
            <img src={logo} alt="logo " />
            <Link to="/">Movies</Link>
          </H.Logo>
          <H.Nav>
            {headerNav.map((e, i) => (
              <H.NavItem key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </H.NavItem>
            ))}
          </H.Nav>
        </H.Wrapper>
      </W.Container>
    </H.Header>
  );
};
