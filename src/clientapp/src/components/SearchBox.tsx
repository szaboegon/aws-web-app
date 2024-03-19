import { ActionIcon, Flex, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface ISearchBoxProps {}
export const SearchBox: React.FC<ISearchBoxProps> = () => {
  return (
    <>
      <Flex>
        <ActionIcon variant="filled" aria-label="Search" size={36}>
          <IconSearch />
        </ActionIcon>
        <TextInput placeholder="Search" size="sm" w={"300px"} />
      </Flex>
    </>
  );
};
