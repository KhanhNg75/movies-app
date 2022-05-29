import styled from "styled-components";

const Title = styled.div`
  padding: var(--header-height) 0 2rem;
  text-align: center;
  margin-bottom: 2rem;

  position: relative;

  background-image: ${(props) => props.backgroundImage};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    position: relative;
    z-index: 99;
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

export { Title };
