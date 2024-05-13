import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
        --color-lime-400: #a3e635;
        --color-lime-50: #f7fee7;
        --color-lime-100: #ecfccb;
        --color-lime-200: #d9f99d;
        --color-lime-300: #bef264;

        --color-blue-100: #dbeafe;
        --color-blue-200: #bfdbfe;
        --color-blue-300: #7dd3fc;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', 'sans-serif';
    }
`;

export default GlobalStyles;