import { styled } from "styled-components";
import Heart from "../../../assets/game/Heart";

interface Props {
  score: number;
}

const Rating = ({ score }: Props) => {
  return (
    <HeartContainer>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Heart key={i} isActive={score >= i} />
        ))}
    </HeartContainer>
  );
};

const HeartContainer = styled.div`
  position: fixed;
  bottom: 428px;
  display: flex;
  gap: 8px;
`;

export default Rating;
