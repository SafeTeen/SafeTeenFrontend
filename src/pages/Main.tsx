import React from "react";
import {TextLogo} from "../assets/common/TextLogo";
import styled from "styled-components";
import BottomFixedTab from "../components/common/BottomFixedTab";

const Main = () => {
    return (
        <>
            <Cover>
                <TextLogo/>
                <RatingBox>
                    <UpDiv>
                        <p>현재 등급</p>
                        <p>감기</p>
                    </UpDiv>
                    <Chart>
                        <StyledSVG viewBox="0 0 200 200">
                            <OuterCircle cx="100" cy="100" r="90"/>
                            <ProgressCircle
                                cx="100"
                                cy="100"
                                r="90"
                                progress={80 / 100}
                            />
                            <InnerCircle cx="100" cy="100" r="70"/>
                        </StyledSVG>
                    </Chart>
                    <BottomDivBox>
                        <p>리워드 포인트</p>
                        <BottomDiv>
                            <p>600</p>
                            <p>/1200</p>
                        </BottomDiv>
                    </BottomDivBox>
                </RatingBox>
            </Cover>
            <BottomFixedTab/>
        </>
    )
}

export default Main

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;
const OuterCircle = styled.circle`
  fill: none;
  stroke: ${({theme}) => theme.color.gray300};
  stroke-width: 10;
`;
const ProgressCircle = styled.circle<{ progress: number }>`
  fill: none;
  stroke: ${({theme}) => theme.color.main500};
  stroke-width: 10;
  stroke-dasharray: ${(props) => 2 * Math.PI * 90};
  stroke-dashoffset: ${(props) => 2 * Math.PI * 90 * (1 - props.progress)};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: 1s;
`;
const InnerCircle = styled.circle`
  fill: ${({theme}) => theme.color.gray300};
`;
const BottomDivBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  > p {
    font: ${({theme}) => theme.font.Caption};
  }
`
const BottomDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;

  p:nth-child(2n) {
    font: ${({theme}) => theme.font.Heading6};
    color: ${({theme}) => theme.color.gray700};
    padding-bottom: 3px;
  }

  p:first-child {
    font: ${({theme}) => theme.font.Heading4};
    color: black;
  }
`
const Chart = styled.div`
  position: relative;
  height: 206px;
  width: 206px;
`
const UpDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: -3px;

  p {
    font: ${({theme}) => theme.font.Caption};
    color: ${({theme}) => theme.color.gray700};
  }

  p:nth-child(2n) {
    font: ${({theme}) => theme.font.Body1};
    color: black;
  }
`
const RatingBox = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: ${({theme}) => theme.color.white};
  padding: 16px 0 22px;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const Cover = styled.div`
  padding: 16px;
  background-color: ${({theme}) => theme.color.gray300};
  display: flex;
  flex-direction: column;
  gap: 12px;
`
