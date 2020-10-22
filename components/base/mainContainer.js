import { Flex, Box } from '@chakra-ui/core';

import { Footer } from '.';

export default function MainContainer({ children }) {
  return (
    <Flex
      direction="column"
      height="100vh"
      width="100%"
      marginLeft="280px"
      // justifyContent="center"
      // alignItems="center"
    >
      <Box paddingX="0" marginX="0" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
