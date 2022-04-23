import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
}

/* Used Colors */
:root{
    --main-color: #F8F9FA;
    --item-color: #007BFF;
    --gold-color: #FFC107;
    --white-color: #fff;
    --red-color: #D32F2F;
    --line-color: #CFD4DA;
}

body{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
}
`;
