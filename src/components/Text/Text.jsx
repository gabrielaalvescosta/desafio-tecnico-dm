import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

const TextProps = TypographyProps;

export const Text = styled.p<TextProps>`
    font-family: 14px;
    color: #999;
    ${typography};
`;