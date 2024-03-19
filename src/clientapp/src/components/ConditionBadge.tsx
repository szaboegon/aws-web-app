import { Badge } from "@mantine/core";
import { Condition } from "../models/enums/condition";

interface IConditionBadgeProps {
  condition: Condition;
}
export const ConditionBadge: React.FC<IConditionBadgeProps> = ({
  condition,
}) => {
  const getBadgeColor = (): string => {
    switch (condition) {
      case Condition.brandNew:
        return "green";
      case Condition.excellent:
        return "blue";
      case Condition.good:
        return "yellow";
      case Condition.fair:
        return "orange";
      case Condition.satisfactory:
        return "gray";
    }
  };

  return (
    <>
      <Badge color={getBadgeColor()}>
        {Object.values(Condition)[condition]}
      </Badge>
    </>
  );
};
