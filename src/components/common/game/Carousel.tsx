import Slider from "react-slick";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const simulationData = [
    {
      title: "화재 발생 상황",
      difficulty: "하",
      content:
        "평화로운 수업시간, 갑자기 사이렌이 울리며 화재 알림 방송이 시작되는데...",
    },
    {
      title: "지진 대피",
      difficulty: "하",
      content:
        "주말 오후, 집에서 휴식을 취하는 도중 갑자기 집이 흔들리기 시작하는데...",
    },
    {
      title: "오토바이 주행",
      difficulty: "중",
      content:
        "피자 가게 알바를 하는 도중 오토바이로 배달 업무를 맡게 되는데...",
    },
    {
      title: "무단 횡단",
      difficulty: "중",
      content: "약속 시간에 늦어 10분 동안 달려가야 하는 상황, 당신의 선택은?",
    },
    {
      title: "혹사",
      difficulty: "상",
      content:
        "대프콘 D-2, 과도한 코딩으로 인해 점점 졸음과 하품이 계속된다... ",
    },
  ];
  return (
    <StyledSlider {...settings}>
      {simulationData.map((item) => (
        <div key={item.title}>
          <p>난이도 {item.difficulty}</p>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      ))}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  > div {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.gray300};
    > h1 {
      font: ${({ theme }) => theme.font.Body3};
    }
  }
`;

export default Carousel;
