import { Flex, Title } from "@mantine/core";

import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";
import { ProductCatalog } from "../components/ProductCatalog";

export const CatalogPage = () => {
  const { data: products, isLoading, isError } = useGetProductsByCategory();

  return (
    <>
      <Flex direction="column" align={"center"}>
        <div style={{ width: "70%", alignSelf: "center" }}>
          <Title my="20px">Results</Title>
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
