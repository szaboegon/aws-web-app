import { Grid, Notification } from "@mantine/core";
import { ErrorNotification } from "./ErrorNotification";
import { ProductCard } from "./ProductCard/ProductCard";
import { SkeletonCards } from "./SkeletonCards";
import { Product } from "../models/product";
import { IconInfoSmall } from "@tabler/icons-react";

interface IProductCatalogProps {
  products: Product[] | undefined;
  isError: boolean;
  isLoading: boolean;
}
export const ProductCatalog: React.FC<IProductCatalogProps> = ({
  products,
  isLoading,
  isError,
}) => {
  return (
    <>
      <Grid gutter={25} mb={"30px"}>
        {products?.map((p) => (
          <Grid.Col span={{ xs: 12, sm: 6, xl: 3 }} key={p.sk}>
            <ProductCard product={p} />
          </Grid.Col>
        ))}
      </Grid>
      {isLoading && <SkeletonCards count={8} />}
      {isError && (
        <ErrorNotification
          title="Oops!"
          body="Something went wrong while loading products. Please try again later."
        />
      )}
      {products?.length == 0 && (
        <Notification icon={<IconInfoSmall />} title={"No results"}>
          Looks like there are no items that match your criteria.
        </Notification>
      )}
    </>
  );
};
