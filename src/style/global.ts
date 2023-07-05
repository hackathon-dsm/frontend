import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }
    #root,body,html {
        height: 100%;
    }
    button {
        outline: 0;
        border: 0;
        
    }
`;
