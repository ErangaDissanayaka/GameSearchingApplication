import { Card, CardRoot, Skeleton, SkeletonText } from "@chakra-ui/react";


const GameCardSkeleton = () => {
  return (
    <CardRoot>
      <Skeleton height={"200px"} width={"350px"} />
      <Card.Body>
       <SkeletonText noOfLines={3} gap={2} />
      </Card.Body>
    </CardRoot>
  );
};

export default GameCardSkeleton;
