import { Card, Grid, Skeleton } from "@mantine/core";

interface ISkeletonCardsProps {
  count: number;
  height?: string;
}
export const SkeletonCards: React.FC<ISkeletonCardsProps> = ({
  count,
  height,
}) => {
  const generateNumbers = (): number[] => {
    var numbersArray = [];
    for (var i = 0; i < count; i++) {
      numbersArray.push(i);
    }
    return numbersArray;
  };

  return (
    <>
      <Grid gutter={25} mb={"30px"}>
        {generateNumbers().map((i) => (
          <Grid.Col span={{ xs: 12, sm: 6, xl: 3 }} key={i}>
            <Skeleton>
              <Card h={height ?? "320px"} />
            </Skeleton>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
