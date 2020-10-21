import { Flex, Container } from '@chakra-ui/core';

import { Footer } from '.';

export default function MainContainer({ children }) {
  return (
    <Flex
      direction="column"
      height="100vh"
      width="100%"
      marginLeft="280px"
      justifyContent="center"
      alignItems="center"
    >
      <Container flex="1">{children}</Container>
      <Footer />
    </Flex>
  );
}
