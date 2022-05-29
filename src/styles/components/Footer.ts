import styled from "styled-components";

const Footer = styled.div`
  position: relative;
  padding: 6rem 2rem;
  background-image: ${(props) => props.backgroundImage};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  p {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export { Footer, FooterContent };
