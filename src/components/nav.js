import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const StyledNav = styled.div`
    bottom:5vh;
    left:5vh;
    position:fixed;

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
    }

    .link:hover {
        
    }

    .link:focus {
        outline: 0;
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
