import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import fonts from './fonts';

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
        font-size: calc(5vw + 4em);
        letter-spacing:-3px;
    }

    h2 {
        font-weight: 300;
        font-size: calc(3vw + 3em);
    }

    b {
        color: ${colors.main_pink};
        font-weight:400;
    }
    
    a {
        text-decoration: none;
        transition: all 0.25s ease-out 0s;
    }
    a:hover {
        transition: all 0.25s ease-out 0s;
    }

    .container {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export default GlobalStyles;
