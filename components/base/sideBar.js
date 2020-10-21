import { Flex } from '@chakra-ui/core';

export default function SideBar({ children }) {
  return (
    <Flex
      height="100vh"
      width="280px"
      minWidth="280px"
      background="#3b57eb"
      color="#fff"
      overflowY="auto"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
      paddingX="1rem"
      paddingBottom="1.5rem"
    >
      {children}
    </Flex>
  );
}
