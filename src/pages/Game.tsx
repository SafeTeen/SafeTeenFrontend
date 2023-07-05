import { useState } from "react";
import styled from "styled-components";
import BottomFixedTab from "../components/common/BottomFixedTab";
import ElementBox from "../components/common/ElementBox";
import fire from "../assets/img/fire.png";
import board from "../assets/img/kickBoard.png";
import wind from "../assets/img/wind.png";
import motorcycle from "../assets/img/motorcycle.png";
import Carousel from "../components/common/game/Carousel";

const Game = () => {
  const tabItem = ["스피드 퀴즈", "시뮬레이션"];
  const [activeTab, setActiveTab] = useState<number>(0);
  const boxData = [
    {
      title: "화재 대응",
      body: "화재가 발생했을 때의 상황에 관한 퀴즈",
      url: fire,
      to: "/quiz?title=화재%20대응",
    },
    {
      title: "전동 킥보드",
      body: "전동 킥보드 탑승시 유의 사항에 관한 퀴즈",
      url: board,
      to: "/quiz?title=전동%20킥보드",
    },
    {
      title: "태풍 피해 예방",
      body: "태풍 시 행동 요령에 관한 퀴즈",
      url: wind,
      to: "/quiz?title=태풍%20피해%20예방",
    },
    {
      title: "오토바이",
      body: "오토바이 탑승시 유의 사항에 관한 퀴즈",
      url: motorcycle,
      to: "/quiz?title=오토바이",
    },
  ];

  return (
    <>
      <Cover>
        <h1>게임</h1>
        <TabContainer>
          {tabItem.map((item, i) => (
            <TabItem isActive={activeTab === i} onClick={() => setActiveTab(i)}>
              {item}
            </TabItem>
          ))}
        </TabContainer>
        {tabItem[activeTab] === "스피드 퀴즈" && (
          <SelectDiv>
            <p>클릭 시 퀴즈에 입장하게 됩니다.</p>
            {boxData.map((v, i) => (
              <ElementBox
                url={v.url}
                moveTo={v.to}
                bodyText={v.body}
                titleText={v.title}
                key={i}
              />
            ))}
          </SelectDiv>
        )}
        {tabItem[activeTab] === "시뮬레이션" && (
          <SelectDiv>
            <p>클릭 시 시뮬레이션 게임에 입장하게 됩니다.</p>
            <Carousel />
          </SelectDiv>
        )}
      </Cover>
      {/* <BottomFixedTab/> */}
    </>
  );
};

export default Game;

const TabContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const TabItem = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.main500 : theme.color.gray300};
  color: ${({ isActive, theme }) =>
    isActive ? theme.color.white : theme.color.gray800};
  font: ${({ theme }) => theme.font.Caption};
  padding: 4px 12px;
  border-radius: 50px;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > p {
    font: ${({ theme }) => theme.font.Caption};
    color: ${({ theme }) => theme.color.gray800};
  }
`;
const Cover = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > h1 {
    font: ${({ theme }) => theme.font.Heading6};
    color: ${({ theme }) => theme.color.black};
  }
`;
