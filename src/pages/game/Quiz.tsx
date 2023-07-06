import React, { useEffect, useState } from "react";
import TopBar from "../../components/common/TopBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import fire from "../../assets/img/fire.png";
import kickBoard from "../../assets/img/kickBoard.png";
import wind from "../../assets/img/wind.png";
import motorcycle from "../../assets/img/motorcycle.png";
import { theme } from "../../styles/theme";
import { problemType, 화재대응퀴즈 } from "../../assets/Problem/fire";
import { 전동킥보드 } from "../../assets/Problem/kick";
import SelectButton from "../../components/common/game/SelectButton";
import 건강검진이상무 from "../../assets/img/rjsrkdrjawlsdltkdan.png";
import 허리디스크 from "../../assets/img/gjfleltmzm.png";
import 심장마비 from "../../assets/img/tlawkdakql.png";
import 감기 from "../../assets/img/rkarl.png";
import 독감 from "../../assets/img/ehrrka.png";

const Quiz = () => {
  const [userCount, setUserCount] = useState<number>(1);
  const [page, setPage] = useState<"waiting" | "playing" | "ending">("waiting");
  const [time, setTime] = useState<number>(10);
  const [point, setPoint] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [showed, setShowed] = useState<boolean>(false);
  const [quizImg, setQuizImg] = useState<string>(fire);
  const [animText, setAnimText] = useState<string>(".");
  const [exText, setExText] =
    useState<string>("다른 플레이어를 기다리는 중이에요");
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const navigate = useNavigate();

  const whatQuiz = () => {
    if (title === "화재 대응") {
      return 화재대응퀴즈[currentIdx];
    } else if (title === "전동 킥보드") {
      return 전동킥보드[currentIdx];
    } else return 화재대응퀴즈[currentIdx];
  };

  const { problem, choose, collect }: problemType = whatQuiz();

  useEffect(() => {
    if (title === "화재 대응") {
      setQuizImg(fire);
    } else if (title === "전동 킥보드") {
      setQuizImg(kickBoard);
    } else if (title === "태풍 피해 예방") {
      setQuizImg(wind);
    } else if (title === "오토바이") {
      setQuizImg(motorcycle);
    }
  }, [title]);

  useEffect(() => {
    if (page === "waiting") {
      const text = setInterval(() => {
        setAnimText((a) =>
          a === "." ? ".." : a === ".." ? "..." : a === "..." ? "." : a
        );
      }, 600);
      return () => clearInterval(text);
    }
  }, [animText, page]);

  useEffect(() => {
    if (showed) return;
    if (time > 0 && page === "playing") {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (time <= 0) {
      compare(undefined);
    }
  }, [time, currentIdx, page, showed]);

  useEffect(() => {
    if (userCount >= 5) {
      setExText("곧 시작합니다!");
      setTimeout(() => setPage("playing"), 4000);
    }
  }, [userCount]);

  const plus = () => {
    setUserCount((prev) => (prev + 1 <= 5 ? prev + 1 : prev));
  };

  const compare = (i: number | undefined) => {
    setShowed(true);
    setDisabled(true);
    if (i === collect && currentIdx <= 9) setPoint((prev) => prev + 20);
    else if (i !== collect && currentIdx <= 9)
      setPoint((prev) => (prev - 5 <= 0 ? prev : prev - 5));
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1 < 10 ? prev + 1 : prev));
      setDisabled(false);
      if (currentIdx >= 9) {
        setPage("ending");
      } else {
        setShowed(false);
        setTime(10);
      }
    }, 3000);
  };

  return (
    <>
      <TopBar title={title} />
      {page === "waiting" && (
        <WaitDiv>
          <Img src={quizImg} />
          <TextDiv onClick={plus}>
            <p>{userCount}</p>
            <p>/10</p>
          </TextDiv>
          <WaitText>
            {exText}
            {exText === "다른 플레이어를 기다리는 중이에요" && animText}
          </WaitText>
        </WaitDiv>
      )}
      {page === "playing" && (
        <Cover>
          <p>문제 {currentIdx + 1}/10</p>
          <InfoDiv>
            <InDiv>
              <p>현재 내 점수</p>
              <p>{point}</p>
            </InDiv>
            <InDiv time>
              <p>남은 시간</p>
              <p>{time}</p>
            </InDiv>
          </InfoDiv>
          <ProblemDiv>
            <p>{problem}</p>
            <ChooseDiv>
              {choose.map((v, i) => (
                <SelectButton
                  choose={v}
                  i={i}
                  clicked={() => compare(i)}
                  disabled={disabled}
                  showed={showed}
                  collect={collect}
                />
              ))}
            </ChooseDiv>
          </ProblemDiv>
        </Cover>
      )}
      {page === "ending" && (
        <JustCover>
          <JustImg src={quizImg} />
          <p>모든 문제가 끝났어요!</p>
          <TexutuDiv>
            <p>{userCount}명 중</p>
            <p>1등</p>
          </TexutuDiv>
          <List>
            <p>전체 순위</p>
            <Rank>
              <JustRank>
                <p>1</p>
                <RankImg src={건강검진이상무} />
                <p>최승우</p>
              </JustRank>
              <p>{point}</p>
            </Rank>
            <Rank>
              <JustRank>
                <p>2</p>
                <RankImg src={허리디스크} />
                <p>박휘웅</p>
              </JustRank>
              <p>135</p>
            </Rank>
            <Rank>
              <JustRank>
                <p>3</p>
                <RankImg src={심장마비} />
                <p>정승훈</p>
              </JustRank>
              <p>120</p>
            </Rank>
            <Rank>
              <JustRank>
                <p>4</p>
                <RankImg src={감기} />
                <p>추혜연</p>
              </JustRank>
              <p>115</p>
            </Rank>
            <Rank>
              <JustRank>
                <p>5</p>
                <RankImg src={독감} />
                <p>김승원</p>
              </JustRank>
              <p>100</p>
            </Rank>
          </List>
          <JustButton onClick={() => navigate(-1)}>
            <p>돌아가기</p>
          </JustButton>
        </JustCover>
      )}
    </>
  );
};

export default Quiz;

const JustButton = styled.div`
  width: calc(100% - 32px);
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: fixed;
  bottom: 80px;
  background-color: ${theme.color.main500};

  > p {
    font: ${theme.font.Body1};
    color: white;
  }
`;
const RankImg = styled.div<{ src: string }>`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: 75%;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-color: white;
`;
const JustRank = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font: ${theme.font.Body1};
  }

  > p:first-child {
    width: 18px;
  }
`;
const Rank = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.color.gray300};
  padding: 8px 12px;
  width: 100%;

  > p:last-child {
    font: ${theme.font.Body3};
  }
`;
const up6 = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 0 16px 64px;
  animation: ease ${up6} 1s;

  > p:first-child {
    font: ${theme.font.Body3};
    color: ${theme.color.gray800};
  }
`;
const up5 = keyframes`
  0% {
    margin-top: 40px;
    opacity: 0;
  }
  100% {
    margin-top: 8px;
    opacity: 1;
  }
`;
const TexutuDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin: 8px 0 24px;
  animation: ease ${up5} 0.6s;

  > p:first-child {
    font: ${theme.font.Body3};
    color: ${theme.color.gray800};
    padding-bottom: 4px;
  }

  > p:last-child {
    font: ${theme.font.Heading5};
  }
`;
const up4 = keyframes`
  0% {
    margin: 40px 0 24px;
    opacity: 0;
  }
  100% {
    margin: 0;
    opacity: 1;
  }
`;
const JustImg = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
  animation: ease ${up4} 0.6s;
`;
const JustCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;

  > p:first-child {
    font: ${theme.font.Body3};
    color: ${theme.color.gray800};
  }
`;
const ChooseDiv = styled.div`
  height: fit-content;
  display: flex;
  margin-top: 20px;
  gap: 8px;
  flex-direction: column;
`;
const InDiv = styled.div<{ time?: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;

  > p:first-child {
    font: ${theme.font.Caption};
    color: ${theme.color.gray800};
  }

  > p:last-child {
    font: ${theme.font.Body3};
    color: ${(props) =>
      props.time ? theme.color.systemRed : theme.color.main900};
  }
`;
const InfoDiv = styled.div`
  display: flex;
  gap: 16px;
`;
const ProblemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > p {
    font: ${theme.font.Body2};
  }
`;
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  height: 72vh;
  gap: 20px;

  > p:first-child {
    font: ${theme.font.Heading6};
    margin-bottom: -12px;
  }
`;
const up2 = keyframes`
  0% {
    margin-top: 40px;
    opacity: 0;
  }
  100% {
    margin-top: 16px;
    opacity: 1;
  }
`;
const TextDiv = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;
  margin: 16px 0;
  animation: ease ${up2} 0.6s;

  > p:first-child {
    font: ${theme.font.Heading4};
  }

  > p:last-child {
    font: ${theme.font.Heading6};
    color: ${theme.color.gray700};
    padding-bottom: 3px;
  }
`;
const up = keyframes`
  0% {
    margin-top: 200px;
    opacity: 0;
  }
  100% {
    margin-top: 115px;
    opacity: 1;
  }
`;
const Img = styled.div<{ src: string }>`
  width: 160px;
  height: 160px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 66%;
  border-radius: 100%;
  background-color: ${theme.color.gray100};
  margin-top: 115px;
  animation: ease ${up} 0.6s;
`;
const WaitDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const up3 = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const WaitText = styled.p`
  font: ${theme.font.Caption};
  color: ${theme.color.gray800};
  animation: ease ${up3} 1.6s;
`;
