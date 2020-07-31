import React from 'react';
import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Layout from '../components/layout';

import bg from '../images/bg-about.png';

const fadeInAnimation = keyframes`${fadeIn}`;

const StyledAbout = styled.div`
  width:100%;
  height: 100vh;
  margin:0;
  font-size:1em;
  background: ${colors.main_bg};
  background: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  
  a {
    color: ${colors.main_pink};
    font-weight:400;
    border-bottom: 2px solid ${colors.main_pink};
    padding-bottom:3px;

    &:hover {
      padding-bottom:0px;
      color: ${colors.main_text};
      border-bottom: 2px solid ${colors.main_pink};
    }
  }
  
  .container {
    position:absolute;
    height: 80%;
    width: calc(100% - 10vh);
    margin:5vh;
  }

  @media only screen and (max-width: 1023px) {
    .container {
      height: 70%;
    }
  }

  .desc {
    font-size: ${fonts.body_size};
    width: 50%;

    p {
      margin: calc(1.5vh + 1em);
    }

    .darker {
      font-weight:400;
    }
  }

  .exp {
    font-size: calc(1vw + 0.6em);
    text-align: right;
    width: 100%;
    line-height: calc(1vw + 1.2em);
    animation: 1s ${fadeInAnimation};
  }
  
  .headers {
    width:100%;
    text-align: right;
  }
`;

const AboutPage = () => (
  <Layout>
    <StyledAbout>
      <div className="container">
        <div className="headers">
          <h2>A little</h2>
          <h1>about me.</h1>
        </div>
        <div className="desc">
          <span className="darker">
            I enjoy writing efficient, clean code, and creating fluid
            and beautiful user interfaces.
          </span>
          <p />
          <span>
            I also love
            {' '}
            <a href="https://www.last.fm/user/chuntul">music</a>
            , birds, and a good book.
          </span>
        </div>
        <div className="exp">
          <span>
            <b>Front-end:</b>
            {' '}
            React, Gatsby, d3.js/PlotlyJS
            {' '}
            <br />
            <b>Backend:</b>
            {' '}
            NodeJS/Express, GraphQL, MySQL
            <br />
            <b>Misc:</b>
            {' '}
            Python, Java, R
            <br />
            <b>Tools:</b>
            {' '}
            Photoshop, Illustrator, Github, Unix/Linux
            <br />
          </span>
        </div>
      </div>
    </StyledAbout>
  </Layout>
);

export default AboutPage;
