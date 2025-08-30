import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 85 ? "green" : score > 50 ? "red" : undefined;
  return (
    <>
      <Badge color={color}>{score}</Badge>
    </>
  )
}

export default CriticScore
