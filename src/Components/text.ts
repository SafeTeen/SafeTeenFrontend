import styled from "styled-components";
import {Fonts, fontsKeyOfType} from "../styles/theme/font";

interface text {
    color?: string;
    font?: fontsKeyOfType;
}

export const Text = styled.p<text>`
  font-size: ${props => props.font ? Fonts[props.font].size : Fonts["Body4"].size};
  font-weight: ${props => props.font ? Fonts[props.font].weight : Fonts["Body4"].weight};
  line-height: ${props => props.font ? Fonts[props.font].height : Fonts["Body4"].height};
  color: ${props => props.color ?? "black"};
`
