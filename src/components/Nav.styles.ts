import styled from "styled-components";
import {Link} from "react-router";

export const Navv = styled.nav`
  width: 30%;
  background-color: #4A2B8C;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const NavUl = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const NavLi = styled.li`
  width: 80%;
  padding: 1%;
  margin: 12% auto;
  text-align: center;

  @media screen and (max-width: 1000px) {
    margin: 2% 1%;
  }

  @media screen and (max-width: 750px) {
    width: 60%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  background-color: #F5F3FF;
  color: #4A2B8C;
  text-decoration: none;
  font-size: calc(2px + 2.3vw);
  padding: 2% 2%;
  border-radius: 5%;

  @media screen and (max-width: 750px) {
    font-size: calc(2px + 2.5vw);
  }
`;