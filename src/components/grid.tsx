import styled from "styled-components";

export const Col3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: 1fr;
  gap: 15px;
  margin-top: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
