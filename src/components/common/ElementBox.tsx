import styled from "styled-components";
import {theme} from "../../styles/theme";
import {useNavigate} from "react-router-dom";

interface boxProps {
    main?: boolean;
    titleText: string;
    bodyText: string;
    url: string;
    moveTo: string;
}

const ElementBox = ({main, titleText, bodyText, url, moveTo}: boxProps) => {
    const navigate = useNavigate();
    return (
        <Box main={main} onClick={()=>navigate(moveTo)}>
            <Img main={main} src={url}/>
            <TextDiv main={main}>
                <p>{titleText}</p>
                <p>{bodyText}</p>
            </TextDiv>
        </Box>
    )
}

export default ElementBox

interface boolProps {
    main: boolean | undefined;
}

const TextDiv = styled.div<boolProps>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.main ? 0 : "4px"};
  height: fit-content;

  > p:first-child {
    font: ${theme.font.Body1};
  }

  > p:nth-child(2n) {
    font: ${props => props.main ? theme.font.Caption : theme.font.Body4};
    color: ${props => props.main ? theme.color.main500 : theme.color.black};
  }
`
const Img = styled.img<boolProps>`
  width: 48px;
  height: 48px;
  object-fit: cover;
  background-color: ${props => props.main ? theme.color.gray300 : theme.color.white};
  border-radius: 100%;
`
const Box = styled.div<boolProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.main ? "8px" : "12px"};
  background-color: ${props => props.main ? theme.color.white : theme.color.gray300};
  gap: 8px;
  border-radius: 8px;
`
