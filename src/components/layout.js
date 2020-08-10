import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './nav';
import BottomLinks from './bottomlinks';

const Layout = ({ children }) => (
  <>

    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <title>Chantal Ho</title>
    </Helmet>
    <GlobalStyles />
    <Nav />
    <BottomLinks />
    <main>{children}</main>
  </>

);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
