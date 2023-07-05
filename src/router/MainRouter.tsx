import { Route, Routes } from "react-router";
import Main from "../pages/Main";
import Game from "../pages/Game";
import Info from "../pages/Info";
import Store from "../pages/Store";
import MyPage from "../pages/MyPage";
import Quiz from "../pages/game/Quiz";
import Simulation from "../pages/game/Simulation";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="info" element={<Info />} />
        <Route path="store" element={<Store />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/simulation/overwork" element={<Simulation />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
