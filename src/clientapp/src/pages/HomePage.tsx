import { Flex, Grid, Title } from "@mantine/core";
import { HeroSection } from "../components/HeroSection";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useGetProducts } from "../hooks/useGetAllProducts";

export const HomePage = () => {
  const { data: products } = useGetProducts();

  return (
    <>
      <Flex direction="column">
        <HeroSection />
        {
          //Explore a diverse range of products, from clothing and accessories to furniture and electronics. Sell your own items effortlessly and give them a second life with someone new.
        }
        <div style={{ width: "70%", alignSelf: "center" }}>
          <Title my="20px">Explore products</Title>
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
