import { Flex, Title } from "@mantine/core";
import { HeroSection } from "../components/HeroSection";
import { useGetProducts } from "../hooks/useGetProducts";
import { ProductCatalog } from "../components/ProductCatalog";

export const HomePage = () => {
  const { data: products, isLoading, isError } = useGetProducts();

  return (
    <>
      <Flex direction="column">
        <HeroSection />
        {
          //Explore a diverse range of products, from clothing and accessories to furniture and electronics. Sell your own items effortlessly and give them a second life with someone new.
        }
        <div style={{ width: "70%", alignSelf: "center" }}>
          <Title my="20px">Explore products</Title>
          <ProductCatalog
            products={products}
            isError={isError}
            isLoading={isLoading}
          />
        </div>
      </Flex>
    </>
  );
};
