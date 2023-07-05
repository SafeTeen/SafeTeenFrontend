import React from "react";
import styled from "styled-components";
import BottomFixedTab from "../components/common/BottomFixedTab";
import ElementBox from "../components/common/ElementBox";

const Game = () => {
    const boxData = [
        {title: "화재 대응", body: "화재가 발생했을 때의 상황에 관한 퀴즈", url: "", to: "/"},
        {title: "전동 킥보드", body: "전동 킥보드 탑승시 유의 사항에 관한 퀴즈", url: "", to: "/"},
        {title: "태풍 피해 예방", body: "태풍 시 행동 요령에 관한 퀴즈", url: "", to: "/"},
        {title: "오토바이", body: "오토바이 탑승시 유의 사항에 관한 퀴즈", url: "", to: "/"},
    ]

    return (
        <>
            <Cover>
                <SelectDiv>
                    <p>클릭 시 퀴즈에 입장하게 됩니다.</p>
                    {boxData.map((v, i) =>
                        <ElementBox url={v.url} moveTo={v.to} bodyText={v.body} titleText={v.title} key={i}/>
                    )}
                </SelectDiv>
            </Cover>
            <BottomFixedTab/>
        </>
    )
};

export default Game;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > p {
    font: ${({theme}) => theme.font.Caption};
  }
`
const Cover = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
