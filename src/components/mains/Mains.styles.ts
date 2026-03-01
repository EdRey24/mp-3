import styled from "styled-components";

export const Heading2 = styled.h2`
  color: #4A2B8C;
`;

export const Heading3 = styled.h3`
  color: #4A2B8C;
`;

export const Heading4 = styled.h4`
  color: #4A2B8C;
`;

export const Main = styled.main`
  padding: 1% 2%;
  min-height: 120vh;
  height: auto;
  width: 70%;
  background-color: #F5F3FF;
  color: #2D2A42;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  margin: 3% 5% 3% 0;
  padding: 2% 2%;
  background-color: #FFFFFF;
  border-left: 0.25vw solid #9D7BD8;
  border-radius: 0 1vw 1vw 0;
  color: #2D2A42;

  @media screen and (max-width: 1000px) {
    align-items: center;
    margin-top: 6%;
  }
`;