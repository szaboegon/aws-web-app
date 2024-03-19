import { Button, Flex, Menu } from "@mantine/core";
import { Category } from "../models/category";

interface ICategoriesMenuProps {}
export const CategoriesMenu: React.FC<ICategoriesMenuProps> = () => {
  const categories: Category[] = [
    { name: "entertainment", isTopLevel: true },
    { name: "clothes", isTopLevel: true },
    { name: "toys", isTopLevel: true },
    { name: "toys1", isTopLevel: false, parentCategory: "toys" },
    { name: "toys2", isTopLevel: false, parentCategory: "toys" },
    { name: "toys3", isTopLevel: false, parentCategory: "toys" },
    { name: "toys4", isTopLevel: false, parentCategory: "toys" },
  ];
  return (
    <>
      <Flex>
        {categories
          .filter((c) => c.isTopLevel)
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
                      child.parentCategory === c.name && !child.isTopLevel
                  )
                  .map((child) => (
                    <Menu.Item
                      key={child.name}
                      component="a"
                      href={`/catalog?category=${child.name}`}
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
