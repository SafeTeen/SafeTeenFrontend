import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import HomeIcon from "../../assets/common/HomeIcon";
import GameIcon from "../../assets/common/GameIcon";
import InfoIcon from "../../assets/common/InfoIcon";
import StoreIcon from "../../assets/common/StoreIcon";
import MyIcon from "../../assets/common/MyIcon";

const BottomFixedTab = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const TabElement = [
    {
      title: "홈",
      img: <HomeIcon isActive={"/" === pathname} />,
      link: "/",
    },
    {
      title: "게임",
      img: <GameIcon isActive={"/game" === pathname} />,
      link: "/game",
    },
    {
      title: "정보",
      img: <InfoIcon isActive={"/info" === pathname} />,
      link: "/info",
    },
    {
      title: "상점",
      img: <StoreIcon isActive={"/store" === pathname} />,
      link: "/store",
    },
    {
      title: "마이",
      img: <MyIcon isActive={"/mypage" === pathname} />,
      link: "/mypage",
    },
  ];

  return (
    <>
      <_TabContainer>
        {TabElement.map((item) => (
          <_TabItem
            isActive={item.link === pathname}
            key={item.title}
            onClick={() => navigate(item.link)}
          >
            {item.img}
            <p>{item.title}</p>
          </_TabItem>
        ))}
      </_TabContainer>
      <_SafeArea />
    </>
  );
};

const _TabContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  z-index: 101 !important;
  background-color: ${({ theme }) => theme.color.white};
`;

const _TabItem = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg {
    margin-bottom: 4px;
  }
  > p {
    font: ${({ theme }) => theme.font.Caption};
    color: ${({ theme, isActive }) =>
      isActive ? theme.color.gray800 : theme.color.gray500};
  }
`;

const _SafeArea = styled.div`
  width: 100%;
  height: 56px;
`;

export default BottomFixedTab;
