import { Button, Flex, Menu } from "@mantine/core";
import { useGetAllCategories } from "../hooks/useGetAllCategories";

interface ICategoriesMenuProps {}
export const CategoriesMenu: React.FC<ICategoriesMenuProps> = () => {
  const { data: categories } = useGetAllCategories();

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
                <Menu.Item>All</Menu.Item>
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
                      href={`/catalog?category=${child.normalizedName}`}
                    >
                      {child.name}
                    </Menu.Item>
                  ))}
              </Menu.Dropdown>
            </Menu>
          ))}
      </Flex>
    </>
  );
};
