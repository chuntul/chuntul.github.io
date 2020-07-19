import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import fonts from './fonts';
import bg from '../images/bg.jpg';

const GlobalStyles = createGlobalStyle`
    body {
        background: ${colors.main_bg};
        margin:0;
        overflow:hidden;
        font-family: ${fonts.body_font};
        color: ${colors.main_text};
        font-weight:300;
    }

    h1, h2, h3 {
        margin:0;
    }

    h1, h3 {
        font-family: ${fonts.header_font};
    }


    h1 {
        font-weight: ${fonts.header_bold};
        font-size: calc(7vw + 2.2em);
        letter-spacing:-3px;
    }

    h2 {
        font-weight: 300;
        font-size: calc(5vw + 1em);
        margin:0 3px;
    }

    b {
        color: ${colors.main_pink};
        font-weight:400;
    }
    
    a {
        text-decoration: none;
        transition: all 0.25s ease-out 0s;
        &:hover {
            transition: all 0.25s ease-out 0s;
        }
    }

    .container {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media only screen and (max-width: 1023px) {
        .desc {
            width: 85% !important;
        }
    }

`;

export default GlobalStyles;
