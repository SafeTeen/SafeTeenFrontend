import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {useEffect, useState} from "react";

interface selectProps {
    i: number;
    choose: string;
    clicked: () => void;
    disabled: boolean;
    collect: number;
    showed: boolean;
}

const SelectButton = ({i, choose, clicked, disabled, collect, showed}: selectProps) => {
    const [status, setStatus] = useState<"default" | "collect" | "wrong">("default");
    useEffect(() => {
        console.log(showed);
        if (i === collect && showed) {
            setStatus("collect");
        }
        if (!showed) {
            setStatus("default");
        }
    }, [showed])

    const handleClick = () => {
        if (i !== collect) {
            setStatus("wrong");
        }
        clicked();
    }
    return (
        <JustDiv onClick={handleClick} disabled={disabled} state={status}>
            <TextDiv>
                <p>{i === 0 ? "A" : i === 1 ? "B" : i === 2 ? "C" : "D"}</p>
                <p>{choose}</p>
            </TextDiv>
            <p>{status === "collect" && "정답"}</p>
        </JustDiv>
    )
}

export default SelectButton

const TextDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
const JustDiv = styled.div<{ disabled: boolean, state: "default" | "collect" | "wrong" }>`
  display: flex;
  justify-content: space-between;
  padding: 14px 12px;
  background-color: ${props => props.state === "wrong" ? "#F8D6D6" : theme.color.gray300};
  border-radius: 8px;
  pointer-events: ${props => props.disabled ? "none" : "auto"};

  p {
    font: ${theme.font.Body3};
    color: ${props => props.state === "wrong" ? theme.color.systemRed : props.state === "collect" ? theme.color.main900 : theme.color.black};
  }
`
