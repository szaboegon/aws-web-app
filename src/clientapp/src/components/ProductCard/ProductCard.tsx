import { Card, Group, Image, Text } from "@mantine/core";
import { Product } from "../../models/product";
import classes from "./ProductCard.module.css";
import { ConditionBadge } from "../ConditionBadge";
import { IconMapPin } from "@tabler/icons-react";

interface IProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <>
      <Card className={classes.card} shadow="lg" padding={"lg"}>
        <Card.Section mb="md">
          <Image
            h={300}
            src={product?.images?.length > 0 ? product.images[0] : ""}
            style={{ objectFit: "cover" }}
            alt="product image"
          />
        </Card.Section>
        <Group justify="space-between" mb="5px">
          <Text style={{ fontWeight: 500 }} size="20px">
            {product.price + " EUR"}
          </Text>
          <ConditionBadge condition={product.condition} />
        </Group>
        <Text size="18px" mb={"10px"}>
          {product.name}
        </Text>
        <Group gap={"5px"}>
          <IconMapPin />
          <Text>{product.location.city + ", " + product.location.country}</Text>
        </Group>
      </Card>
    </>
  );
};
