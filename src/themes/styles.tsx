import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');

    * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    }

    body {
    background-color: ${({ theme }) => theme.colors.primary};
    }
`;

