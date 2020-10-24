import { Box, useColorMode } from '@chakra-ui/core';

export default function HeaderWrapper({ children }) {
  const { colorMode } = useColorMode();
  return (
    <Box
      background={colorMode === 'dark' ? 'gray.800' : 'lightBackground'}
      borderBottom="1px"
      borderBottomColor="rgba(255,255,255,0.1)"
      padding="3rem"
      transition="background .2s"
    >
      {children}
    </Box>
  );
}
