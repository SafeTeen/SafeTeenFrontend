import styled from "styled-components";
import BackArrowIcon from "../../assets/common/BackArrowIcon";
import {useNavigate} from "react-router-dom";

const TopBar = ({title}: { title: string | null }) => {
    const navigate = useNavigate();
    return (
        <Cover>
            <BackArrowIcon clicked={() => navigate(-1)}/>
            <p>{title}</p>
            <div style={{width: "24px", height: "24px"}}></div>
        </Cover>
    )
}

export default TopBar

const Cover = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  top: 0;
  position: relative;
`
