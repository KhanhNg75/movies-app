import styled, { css } from "styled-components";

const Skeleton = styled.div`
  background: var(--white);
  margin: 10px 0;
  border-radius: 4px;
  ${({ home }) =>
    home &&
    css`
      min-height: 100vh;
    `};
`;

export { Skeleton };
