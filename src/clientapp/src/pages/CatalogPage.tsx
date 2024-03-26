import { Flex, Title, Grid } from "@mantine/core";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useGetProducts } from "../hooks/useGetProducts";
import { useSearchParams } from "react-router-dom";
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";

export const CatalogPage = () => {
  const { data: products, isLoading, isError } = useGetProductsByCategory();

  return (
    <>
      <Flex direction="column">
        <div style={{ width: "70%", alignSelf: "center" }}>
          <Title my="20px">{}</Title>
          <Grid gutter={25} mb={"30px"}>
            {products?.map((p) => (
              <Grid.Col span={{ xs: 12, sm: 6, xl: 3 }} key={p.sk}>
                <ProductCard product={p} />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Flex>
    </>
  );
};
