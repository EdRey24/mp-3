import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 80vw;
  background-color: #F5F3FF;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;