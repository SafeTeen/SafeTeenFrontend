import { Route, Routes } from "react-router";
import Main from "../pages/Main";
import Game from "../pages/Game";
import Info from "../pages/Info";
import Store from "../pages/Store";
import MyPage from "../pages/MyPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="game" element={<Game />} />
        <Route path="info" element={<Info />} />
        <Route path="store" element={<Store />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
