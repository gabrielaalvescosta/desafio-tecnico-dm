import { ThemeProvider } from 'styled-components';


const fontSizes: any = [16, 22, 72];
fontSizes.body = fontSizes[0];
fontSizes.bodydisplayLarge = fontSizes[1];
fontSizes.displaExtraLarge = fontSizes[2];


const primary = '#999999';
const secondary = '#ddd444';

const theme = {

    fontSizes,
    colors: {
        primary,
        secondary
    }

}

export const Theme: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>{ children }</ThemeProvider>
    )
}