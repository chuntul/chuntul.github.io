import React from 'react';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const StyledNav = styled.div`
  bottom:5vh;
  left:5vh;
  position:absolute;
  max-height:200px;
  z-index:999;

  .link-container {
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top:1.5vh;

    .link {
      background: transparent;
      border: none;
      font-family: ${fonts.body_font};
      display:block;
      font-size: calc(0.7vw + 0.7em);
      font-weight:300;
      color: ${colors.main_text};
      cursor: pointer;
      width:180px;
      text-align:left;
  
      &:focus {
        outline: 0;
      }
    }

    &:hover {
      .link-effect {
        width:30px;
        margin-right:10px;
        transition: all 0.25s ease-out 0s;
      }
    }
  }

  .link-effect {
    background-color: ${colors.main_pink};
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    margin-right:0px;
    width: 0px;
    transition: all 0.25s ease-out 0s;
  }
  
  .active {
    .link {
      color: ${colors.main_pink};
    }
    .link-effect {
      width:30px !important;
      margin-right:10px;
    }
  }
}
  
`;

const Nav = () => {
  const links = [
    {
      name: 'Home', url: '/',
    }, {
      name: 'About', url: '/about/',
    },
    // {
    //   name: 'Portfolio', url: '/portfolio/',
    // },
  ];

  return (
    <StyledNav>
      {links.map((x) => (
        <AniLink
          fade
          duration={0.3}
          key={x.name}
          to={x.url}
          className="link-container"
          activeClassName="active"
        >
          <div className="link-effect" />
          <span className="link">{x.name}</span>
        </AniLink>
      ))}
    </StyledNav>
  );
};

export default Nav;
