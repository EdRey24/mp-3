import styled from "styled-components";
import {Link} from "react-router";

export const CalcContainer = styled.div`
  text-align: center;
`;

export const Heading2 = styled.h2`
    font-size: 3vw;
    color: #4A2B8C;
`;

export const CalcInput = styled.input`
  display: block;
  margin: auto;
  border-radius: 2vw;
  font-size: 1.5vw;
  text-align: center;
`;

export const CalcLabel = styled.label`
  display: block;
  margin: auto;
  border-radius: 2vw;
  font-size: 1.5vw;
  text-align: center;
`;

export const CalcButton = styled.button`
  background-color: #FFD166;
  color: #2D2A42;
  border: none;
  border-radius: 2vw;
  padding: 1%;
  margin: 1% 0.5%;
  font-size: calc(2px + 1.5vw);
  font-weight: bold;
`;

export const CalcOutput = styled.div`
  background-color: #2B2D42;
  padding: 4.5%;
  margin: auto;
  max-width: 50%;
  border-radius: 1.5vw;
  font-size: calc(2px + 2vw);
  color: #FFF9F9; /* added for contrast, not in original but likely needed */
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #4A2B8C;
`;