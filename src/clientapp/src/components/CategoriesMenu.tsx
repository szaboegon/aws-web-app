import { Button, Flex, Group, Loader, Menu, Skeleton } from "@mantine/core";
import { useGetAllCategories } from "../hooks/useGetAllCategories";

interface ICategoriesMenuProps {}
export const CategoriesMenu: React.FC<ICategoriesMenuProps> = () => {
  const { data: categories, isLoading } = useGetAllCategories();

  return (
    <>
      <Flex>
        {categories
          ?.filter((c) => c.isTopLevel)
          .map((c) => (
            <Menu key={c.name} position="bottom-start" offset={0}>
              <Menu.Target>
                <Button variant="default">{c.name}</Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  key={c.name}
                  component="a"
                  href={`/catalog?category=${c.normalizedName}`}
                ></Menu.Item>
                {categories
                  .filter(
                    (child) =>
                      child.parentCategory === c.normalizedName &&
                      !child.isTopLevel
                  )
                  .map((child) => (
                    <Menu.Item
                      key={child.name}
                      component="a"
                      href={`/catalog?category=${c.normalizedName}:${child.normalizedName}`}
                    >
                      {child.name}
                    </Menu.Item>
                  ))}
              </Menu.Dropdown>
            </Menu>
          ))}
        {isLoading && <Loader size={30} />}
      </Flex>
    </>
  );
};
