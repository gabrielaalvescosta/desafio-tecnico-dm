import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    }

    body {
    background-color: ${({ theme }) => theme.colors.primary};
    }
`;

