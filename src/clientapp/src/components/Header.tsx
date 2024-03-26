import { Button, Flex, Space, Stack, Title } from "@mantine/core";
import { CategoriesMenu } from "./CategoriesMenu";
import { Link } from "react-router-dom";

interface IHeaderProps {
  contentWidth?: string;
}
export const Header: React.FC<IHeaderProps> = ({ contentWidth }) => {
  return (
    <>
      <Stack mx={"auto"} p={"5px"} w={contentWidth ?? "100%"}>
        <Flex w={"100%"} align={"center"}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title size={"34px"} style={{ color: "black" }}>
              Sellit
            </Title>
          </Link>
          <Space w={"xl"} />
          <CategoriesMenu />
          {/* <SearchBox /> */}
          <Button
            size="md"
            style={{ marginLeft: "auto" }}
            component="a"
            href="/sell"
          >
            Start selling
          </Button>
        </Flex>
      </Stack>
    </>
  );
};
