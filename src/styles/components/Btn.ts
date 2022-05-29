import styled from "styled-components";

const Btn = styled.button`
  border: 4px solid transparent;
  background-color: var(--main-color);
  color: var(--white);
  border-radius: var(--border-radius);
  padding: 0.5rem 1.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  box-shadow: 0px 0px 7px 8px #ff00004d;
  transition: box-shadow 0.3s ease;
  position: relative;
  margin-right: 50px;
  &:hover {
    box-shadow: 0px 0px 7px 15px #ff00004d;
  }
`;

const BtnOutline = styled.button`
  border: 3px solid var(--white);
  background-color: transparent;
  color: var(--white);
  border-radius: var(--border-radius);
  padding: 0.5rem 1.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  box-shadow: unset;
  transition: color 0.3s ease, background-color 0.3s ease;
  position: relative;
  &:hover {
    box-shadow: unset;
    color: var(--main-color);
    background-color: var(--white);
  }
`;

export { Btn, BtnOutline };
