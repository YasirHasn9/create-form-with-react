import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:content-box;
}
html {
    font-size: 62.5%;
}
`;
