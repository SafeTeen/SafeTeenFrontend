import { useState } from "react";
import TopBar from "../../components/common/TopBar";
import Rating from "../../components/common/game/Rating";
import { styled } from "styled-components";
import overwork0 from "../../assets/game/overwork0.png";
import overwork1 from "../../assets/game/overwork1.png";
import overwork2 from "../../assets/game/overwork2.png";
import overwork3 from "../../assets/game/overwork3.png";
import overwork4 from "../../assets/game/overwork4.png";
import overworkResult from "../../assets/game/overworkResult.png";
import { useNavigate } from "react-router";

const Simulation = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(4);
  const [idx, setIdx] = useState(0);

  const result = () => {
    if (score <= 0) {
      return ["사망", 0, "곧 하늘에서 뵐 것 같네요!"];
    } else if (score === 1) {
      return ["혼수상태", 50, "질병과 사고는 안심했을 때 찾아오기 마련입니다."];
    } else if (score === 2) {
      return ["중상", 100, "늘 안전과 건강을 최우선으로."];
    } else if (score === 3) {
      return ["부상", 150, "아는 만큼 안전해진다."];
    } else {
      return ["생존", 200, "오늘도 안전하고 행복한 하루 되세요!"];
    }
  };

  const simulationContent = [
    {
      img: overwork0,
      question:
        "대프콘 개최가 이틀 남았다. 그러나 대프콘에 낼 프로젝트의 완성까지는 한참 남은 상황,  옆에 같이 개발하던 팀원이 잠에 들기 시작한다... 당신이 팀원에게 건넬 말은?",
      answer: [
        "“잠은 죽어서 자는거야”라며 깨운다.",
        "머리를 세게 때려서 깨운다.",
        "“우리 대프콘만 끝나면 하루에 20시간씩 자자.”",
        "“30분 뒤에 깨워줄테니까 피곤하면 자.”",
      ],
      plusScore: [-1, -2, -1, 1],
    },
    {
      img: overwork1,
      question:
        "현재 시간은 새벽 2시, 개발을 진행하던 중 점점 눈의 수분이 말라가기 시작한다. 이때 당신이 취할 행동은?",
      answer: [
        "인공눈물이 있는 친구를 찾아본다.",
        "잠시 하던 걸 멈추고 눈을 감고 있는다.",
        "무시하고 계속해서 개발을 진행한다.",
        "나의 정신력이 부족한 것이다. 뺨을 때려 정신을 붙잡는다.",
      ],
      plusScore: [1, 1, -1, -1],
    },
    {
      img: overwork2,
      question:
        "코딩에 너무 집중한 나머지 거북목이 심해졌다. 목이 아프지는 않은 상황. 이때 당신이 취할 행동은?",
      answer: [
        "경수의 목 보호대를 뺏는다.",
        "화면 속으로 들어간다.",
        "바른 자세로 자세를 고쳐 앉는다.",
        "“거북목 오히려 좋아”라고 말한 뒤 개발을 진행한다.",
      ],
      plusScore: [-2, -1, 1, -1],
    },
    {
      img: overwork3,
      question:
        "피곤해 잠시 쉬는 중 허리에 통증이 느껴지기 시작한다. 당신이 취할 행동은?",
      answer: [
        "어차피 박살날 허리 지금 부순다.",
        "내 허리는 소중하니 바른 자세로 고쳐앉는다.",
        "구글에 허리 스트레칭을 검색해 간단한 운동을 해준다.",
        "프로젝트를 포기하고 잔다.",
      ],
      plusScore: [-2, 1, 1, 0],
    },
    {
      img: overwork4,
      question:
        "드디어 대프콘 당일이 되었다! 프로젝트를 어찌저찌 완성된 상황. 그러나 아쉬운 점이 존재해 보완하려는 찰나 체력이 없어 죽기 직전이다. 당신이 취할 행동은?",
      answer: [
        "카페인을 마셔 수명을 연장한다.",
        "“이번생은 행복했다.”",
        "아쉽지만 프로젝트는 완성했으니 휴식을 취한다.",
        "과로로 죽기 전 내가 먼저 창문으로 뛰어 내린다.",
      ],
      plusScore: [-1, -2, 2, -3],
    },
  ];

  return (
    <>
      <TopBar title={"혹사 위험 상황"} />
      {idx < 5 ? (
        <SimulationItem>
          <img src={simulationContent[idx].img} alt="이미지" />
          <p>{simulationContent[idx].question}</p>
          <Rating score={score} />
          <AnswerContainer>
            {simulationContent[idx].answer.map((item, i) => (
              <div
                key={item}
                onClick={() => {
                  setIdx(idx + 1);
                  setScore(score + simulationContent[idx].plusScore[i]);
                }}
              >
                {item}
              </div>
            ))}
          </AnswerContainer>
        </SimulationItem>
      ) : (
        <ResultContainer>
          <div>
            <p className="fadein one">
              혹사 위험 상황 시뮬레이션이 종료 되었습니다.
            </p>
            <img
              className="fadein two"
              src={overworkResult}
              alt="overwork"
              width={228}
            />
            <div className="fadein three">
              <p>결과</p>
              <h1>{result()[0]}</h1>
            </div>
            <h1 className="fadein three">{result()[1]} 포인트 획득</h1>
            <p className="fadein three">{result()[2]}</p>
          </div>
          <button className="fadein four" onClick={() => navigate("/game")}>
            돌아가기
          </button>
        </ResultContainer>
      )}
    </>
  );
};

const SimulationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: calc(100vh - 124px);
  margin: 0 auto;
  margin-top: 4px;
  > p {
    width: 100%;
    font: ${({ theme }) => theme.font.Body4};
    color: ${({ theme }) => theme.color.gray900};
    margin-top: 12px;
  }
  > img {
    border-radius: 8px;
    width: 100%;
    height: 200px;
  }
`;

const AnswerContainer = styled.div`
  position: fixed;
  width: 328px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > div {
    border-radius: 8px;
    padding: 14px 12px;
    background-color: ${({ theme }) => theme.color.gray300};
  }
`;

const ResultContainer = styled.div`
  width: calc(100vw - 32px);
  height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  @keyframes fadein {
    0% {
      transform: translateY(28px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadein {
    opacity: 0;
    animation: fadein ease-in 1s;
    animation-fill-mode: forwards;
  }
  .fadein.two {
    animation-delay: 1s;
  }
  .fadein.three {
    animation-delay: 2s;
  }
  .fadein.four {
    animation-delay: 3s;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
      margin-top: 40px;
    }
    > p {
      margin-top: 20px;
      font: ${({ theme }) => theme.font.Body4};
      color: ${({ theme }) => theme.color.gray800};
    }
    > h1 {
      margin-top: 12px;
      font: ${({ theme }) => theme.font.Body1};
      color: ${({ theme }) => theme.color.main500};
    }
    > div {
      margin-top: 40px;
      display: flex;
      gap: 12px;
      align-items: end;
      > h1 {
        font: ${({ theme }) => theme.font.Heading5};
      }
      > p {
        font: ${({ theme }) => theme.font.Body2};
        margin-bottom: 4px;
      }
    }
  }
  > button {
    height: 48px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.color.main500};
    color: ${({ theme }) => theme.color.white};
    font: ${({ theme }) => theme.font.Body1};
    width: calc(100vw - 32px);
  }
`;

export default Simulation;
