import { Box } from '@chakra-ui/core';

export default function SideBar({ children }) {
  return (
    <Box
      height="100vh"
      marginX="auto"
      position="fixed"
      width="280px"
      minWidth="280px"
      background="#3b57eb"
      color="#fff"
      overflowY="auto"
      paddingX="1rem"
      paddingBottom="1.5rem"
    >
      {children}
    </Box>
  );
}
