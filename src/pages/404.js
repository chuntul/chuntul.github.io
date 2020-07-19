import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Layout from '../components/layout';

const StyledError = styled.div`
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

const ErrorPage = () => (

  <Layout>
    <StyledError>
      <div className="container">
        <div className="headers">
          <h1>Error 404</h1>
          <h2>Not found.</h2>
        </div>
      </div>
    </StyledError>
  </Layout>
);

export default ErrorPage;
