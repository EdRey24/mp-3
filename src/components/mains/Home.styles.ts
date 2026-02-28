import styled from "styled-components";

export const Bio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  width: 100%;
  margin: 5% 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Heading3 = styled.h3`
  color: #4A2B8C;
  text-align: center;
  margin: 2% 0;
  font-size: calc(2px + 2vw);
`;

export const MainImage = styled.img`
  max-width: 40%;
`;

export const BioParagraph = styled.p`
  font-size: calc(2px + 2vw);
  padding: 2%;
`;

export const IntroParagraph = styled.p`
  font-size: calc(2px + 2vw);
  padding: 2%;
`;