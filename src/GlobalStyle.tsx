import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        scroll-behavior: smooth;
    }
    body{
        height: 100%;
        padding: 0px;
        margin: 0px;
        background-color: #E2F1FF;
        color: black;
        font-family: 'NanumSquareNeo-R';
        /* display: flex;
        flex-direction: column; */
        /* overflow: hidden; */
    }
`;