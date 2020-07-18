import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const StyledNav = styled.div`
  bottom:5vh;
  left:5vh;
  position:absolute;

  .link {
    background: transparent;
    border: none;
    font-family: ${fonts.body_font};
    display:block;
    font-size: calc(0.7vw + 0.7em);
    font-weight:300;
    color: ${colors.main_text};
    margin-top:1.5vh;
    cursor: pointer;
    width:150px;
    text-align:left;

    &:before {
      background-color: #000;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      margin-right:0px;
      width: 0px;
      transition: all 0.25s ease-out 0s;
    }

    &:hover:before {
      width:30px;
      margin-right:10px;
      transition: all 0.25s ease-out 0s;
    }

    &:focus {
      outline: 0;
    }
  }
}
  
`;

const Nav = () => (
  <StyledNav>
    <button className="link">Home</button>
    <button className="link">About</button>
    <button className="link">Portfolio</button>
  </StyledNav>
);

export default Nav;
