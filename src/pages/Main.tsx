import React, { useEffect, useState } from "react";
import { TextLogo } from "../assets/common/TextLogo";
import styled from "styled-components";
import BottomFixedTab from "../components/common/BottomFixedTab";
import ElementBox from "../components/common/ElementBox";
import fire from "../assets/img/fire.png";
import 감기 from "../assets/img/rkarl.png";

const Main = () => {
  const challenge = [
    {
      title: "화재 경보기 점검하고",
      body: "100 포인트 받기",
      url: fire,
      to: "/",
    },
    {
      title: "화재 경보기 점검하고",
      body: "100 포인트 받기",
      url: fire,
      to: "/",
    },
    {
      title: "화재 경보기 점검하고",
      body: "100 포인트 받기",
      url: fire,
      to: "/",
    },
  ];
  const testUser = {
    name: "홍길동",
    point: 600,
    rating: "감기",
    nextPoint: 1200,
  };
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress((testUser.point / testUser.nextPoint) * 100);
  }, [testUser.point]);

  return (
    <>
      <Cover>
        <TextLogo />
        <RatingBox>
          <UpDiv>
            <p>현재 등급</p>
            <p>감기</p>
          </UpDiv>
          <Chart>
            <Img src={감기} />
            <StyledSVG viewBox="0 0 200 200">
              <OuterCircle cx="100" cy="100" r="96" />
              <ProgressCircle
                cx="100"
                cy="100"
                r="96"
                strokeDasharray={2 * Math.PI * 96}
                strokeDashoffset={
                  2 * Math.PI * 96 - (2 * Math.PI * 96 * progress) / 100
                }
              />
              <InnerCircle cx="100" cy="100" r="79" />
            </StyledSVG>
          </Chart>
          <BottomDivBox>
            <p>리워드 포인트</p>
            <BottomDiv>
              <p>{testUser.point}</p>
              <p>/{testUser.nextPoint}</p>
            </BottomDiv>
          </BottomDivBox>
        </RatingBox>
        <ChallengeDiv>
          <p>오늘의 챌린지</p>
          {challenge.map((v, i) => (
            <ElementBox
              titleText={v.title}
              bodyText={v.body}
              url={v.url}
              moveTo={v.to}
              main
              key={i}
            />
          ))}
        </ChallengeDiv>
      </Cover>
      {/* <BottomFixedTab/> */}
    </>
  );
};

export default Main;

const Img = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  object-fit: cover;
`;
const ChallengeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > p {
    font: ${({ theme }) => theme.font.Body1};
  }
`;
const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;
const OuterCircle = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.color.gray300};
  stroke-width: 8;
`;
const ProgressCircle = styled.circle<{ progress?: number }>`
  fill: none;
  stroke: ${({ theme }) => theme.color.main500};
  stroke-width: 8;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: 1s;
`;
const InnerCircle = styled.circle`
  fill: ${({ theme }) => theme.color.gray300};
`;
const BottomDivBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  > p {
    font: ${({ theme }) => theme.font.Caption};
  }
`;
const BottomDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;

  p:nth-child(2n) {
    font: ${({ theme }) => theme.font.Heading6};
    color: ${({ theme }) => theme.color.gray700};
    padding-bottom: 3px;
  }

  p:first-child {
    font: ${({ theme }) => theme.font.Heading4};
    color: black;
  }
`;
const Chart = styled.div`
  position: relative;
  height: 206px;
  width: 206px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: -3px;

  p {
    font: ${({ theme }) => theme.font.Caption};
    color: ${({ theme }) => theme.color.gray700};
  }

  p:nth-child(2n) {
    font: ${({ theme }) => theme.font.Body1};
    color: black;
  }
`;
const RatingBox = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px 0 22px;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 4px;
`;
const Cover = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.gray300};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
