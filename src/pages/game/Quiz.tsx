import React, {useEffect, useState} from "react";
import TopBar from "../../components/common/TopBar";
import {useSearchParams} from "react-router-dom";
import styled from "styled-components";
import fire from "../../assets/img/fire.png";
import {theme} from "../../styles/theme";
import {problemType, 화재대응퀴즈} from "../../assets/Problem/fire";
import SelectButton from "../../components/common/game/SelectButton";

const Quiz = () => {
    const [userCount, setUserCount] = useState<number>(1);
    const [page, setPage] = useState<'waiting' | 'playing' | 'ending'>('waiting');
    const [time, setTime] = useState<number>(10);
    const [point, setPoint] = useState<number>(0);
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [showed, setShowed] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');

    const {problem, choose, collect}: problemType = 화재대응퀴즈[currentIdx];

    useEffect(() => {
        if (showed) return;
        if (time > 0 && page === 'playing') {
            const timer = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        if (time <= 0) {
            compare(undefined);
        }

    }, [time, currentIdx, page])

    useEffect(() => {
        if (userCount >= 10) {
            setTimeout(() => setPage('playing'), 2000);
        }
    }, [userCount])

    document.onkeydown = (e) => {
        if (e.key === '=' || e.key === '+') setUserCount(prev => prev + 1 <= 10 ? prev + 1 : prev);
    }

    const compare = (i: number | undefined) => {
        setShowed(true);
        setDisabled(true);
        if (i === collect) setPoint(prev => prev + 20);
        else setPoint(prev => prev - 5);
        setTimeout(() => {
            setCurrentIdx(prev => prev + 1 < 10 ? prev + 1 : prev);
            setTime(10);
            setDisabled(false);
            if (currentIdx >= 9) {
                setPage("ending");
            } else {
                setShowed(false);
            }
        }, 3000);
    }

    return (
        <>
            <TopBar title={title}/>
            {page === 'waiting' && <WaitDiv>
                <Img src={fire}/>
                <TextDiv>
                    <p>{userCount}</p>
                    <p>/10</p>
                </TextDiv>
                <p>다른 플레이어를 기다리는 중이에요...</p>
            </WaitDiv>}
            {page === 'playing' && <Cover>
                <p>문제 {currentIdx + 1}/10</p>
                <InfoDiv>
                    <InDiv><p>현재 내 점수</p><p>{point}</p></InDiv>
                    <InDiv time><p>남은 시간</p><p>{time}</p></InDiv>
                </InfoDiv>
                <ProblemDiv>
                    <p>{problem}</p>
                    <ChooseDiv>
                        {choose.map((v, i) => (
                            <SelectButton choose={v} i={i} clicked={() => compare(i)} disabled={disabled} showed={showed} collect={collect}/>
                        ))}
                    </ChooseDiv>
                </ProblemDiv>
            </Cover>}
            {page === 'ending' && <JustCover>
                <JustImg src={fire}/>
                <p>모든 문제가 끝났어요!</p>
                <TexutuDiv>
                    <p>{userCount}명 중</p>
                    <p>1등</p>
                </TexutuDiv>
            </JustCover>}
        </>
    )
};

export default Quiz;

const TexutuDiv = styled.div`
  
`
const JustImg = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
`
const JustCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 0;

  > p:first-child {
    font: ${theme.font.Body3};
    color: ${theme.color.gray800};
    margin: -24px;
  }
`
const ChooseDiv = styled.div`
  height: fit-content;
  display: flex;
  gap: 8px;
  flex-direction: column;
`
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
    color: ${props => props.time ? theme.color.systemRed : theme.color.main900};
  }
`
const InfoDiv = styled.div`
  display: flex;
  gap: 16px;
`
const ProblemDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    font: ${theme.font.Body2};
  }
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  height: 88vh;
  gap: 20px;

  > p:first-child {
    font: ${theme.font.Heading6};
    margin-bottom: -12px;
  }
`
const TextDiv = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;
  margin: 16px 0;

  > p:first-child {
    font: ${theme.font.Heading4};
  }

  > p:last-child {
    font: ${theme.font.Heading6};
    color: ${theme.color.gray700};
    padding-bottom: 3px;
  }
`
const Img = styled.div<{ src: string }>`
  width: 160px;
  height: 160px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 66%;
  border-radius: 100%;
  background-color: ${theme.color.gray100};
  margin-top: 115px;
`
const WaitDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p:last-child {
    font: ${theme.font.Caption};
    color: ${theme.color.gray800};
  }
`
