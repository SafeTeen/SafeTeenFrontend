import Slider from "react-slick";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import earthquake from "../../../assets/game/earthquake.png";
import fire from "../../../assets/game/fire.png";
import jayWalk from "../../../assets/game/jay-walk.png";
import motorCycle from "../../../assets/game/motor-cycle.png";
import overwork from "../../../assets/game/overwork.png";
import arrow from "../../../assets/game/arrow.png";
import { useNavigate } from "react-router";

const Carousel = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const simulationData = [
    {
      title: "화재 발생 상황",
      difficulty: "하",
      img: fire,
      content:
        "평화로운 수업시간, 갑자기 사이렌이 울리며 화재 알림 방송이 시작되는데...",
      to: "/game",
    },
    {
      title: "지진 대피",
      difficulty: "하",
      img: earthquake,
      content:
        "주말 오후, 집에서 휴식을 취하는 도중 갑자기 집이 흔들리기 시작하는데...",
      to: "/game",
    },
    {
      title: "오토바이 주행",
      difficulty: "중",
      img: motorCycle,
      content:
        "피자 가게 알바를 하는 도중 오토바이로 배달 업무를 맡게 되는데...",
      to: "/game",
    },
    {
      title: "무단 횡단",
      difficulty: "중",
      img: jayWalk,
      content: "약속 시간에 늦어 10분 동안 달려가야 하는 상황, 당신의 선택은?",
      to: "/game",
    },
    {
      title: "혹사",
      difficulty: "상",
      img: overwork,
      content:
        "대프콘 D-2, 과도한 코딩으로 인해 점점 졸음과 하품이 계속된다... ",
      to: "/simulation/overwork",
    },
  ];
  return (
    <StyledSlider {...settings}>
      {simulationData.map((item) => (
        <SliderItem key={item.title} onClick={() => navigate(item.to)}>
          <h2>난이도 {item.difficulty}</h2>
          <img src={item.img} alt="이미지" width={136} height={136} />
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </SliderItem>
      ))}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  margin-top: 32px;
  .slick-arrow {
    z-index: 100;
    width: 24px;
    height: 24px;
    background-image: url(${arrow});
    background-size: 24px;
  }
  .slick-prev {
    left: 4px;
    &::before {
      font-size: 0;
      color: none;
    }
  }
  .slick-next {
    right: 4px;
    transform: translate(0, -50%) scaleX(-1);
    &::before {
      color: none;
      font-size: 0;
    }
  }
  .slick-slide {
    > div {
      width: 240px !important;
      margin: 0 auto;
    }
  }
  .slick-dots {
    position: fixed;
    bottom: 76px;
    left: 0;
    z-index: 101 !important;
    li {
      button {
        &::before {
          font-size: 12px;
          opacity: 1;
          color: ${({ theme }) => theme.color.gray500};
        }
      }
    }
    .slick-active {
      button {
        &::before {
          color: ${({ theme }) => theme.color.main500};
        }
      }
    }
  }
`;

const SliderItem = styled.div`
  height: 360px !important;
  user-select: none;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.gray300};
  padding-bottom: 28px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  > h1 {
    font: ${({ theme }) => theme.font.Body1};
  }
  > h2 {
    font: ${({ theme }) => theme.font.Body2};
  }
  > p {
    margin-top: 12px;
    font: ${({ theme }) => theme.font.Body4};
  }
  > img {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 24px;
  }
`;

export default Carousel;
