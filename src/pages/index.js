import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import Layout from '../components/layout';

const StyledIndex = styled.div`
  width:100vw;
  height: 100vh;
  margin:0;
  background: ${colors.main_bg};
  background: url('./bg.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding:5vh;
  font-size:1em;

  .container {
    height: 55%;
  }

  .desc {
    font-size: ${fonts.body_size};
    width: 60%;
  }
`;

const IndexPage = () => (
  <Layout>
    <StyledIndex>
      <div className="container">
        <div className="headers">
          <h2>Hi, I'm</h2>
          <h1>Chantal.</h1>
        </div>
        <div className="desc">
          <span>
            Currently a
            {' '}
            <b>full-stack software developer</b>
            {' '}
            at UHN working on
            web applications and building user interfaces.

          </span>
          {' '}
          <p />
          <span>
            I'm passionate about
            {' '}
            <b>data visualization</b>
            {' '}
            and
            {' '}
            <b>UI/UX design</b>
            .
          </span>
        </div>
      </div>
    </StyledIndex>
  </Layout>
);

export default IndexPage;
