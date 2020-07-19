import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Layout from '../components/layout';

const StyledPortfolio = styled.div`
  width:100vw;
  height: 100vh;
  margin:0;
  background: ${colors.main_bg};
  font-size:1em;

  .container {
    position:absolute;
    height: 55%;
    width: calc(100% - 10vh);
    margin:5vh;
  }

  .desc {
    font-size: ${fonts.body_size};
    width: 60%;
  }

`;

const PortfolioPage = () => (

  <Layout>
    <StyledPortfolio>
      <div className="container">
        <div className="headers">
          <h2>Some of</h2>
          <h1>my work.</h1>
        </div>
      </div>
    </StyledPortfolio>
  </Layout>
);

export default PortfolioPage;
