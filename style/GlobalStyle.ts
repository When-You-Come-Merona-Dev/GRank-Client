import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Elice Digital Baeum";
        margin: 0;
        padding : 0;
    }
    button:focus,
    input:focus,
    select:focus {
        outline: none;
    }
    button {
        cursor: pointer;
    }
`;