import { Text, Flex, Heading, Button } from '@chakra-ui/core';

import HeaderWrapper from '../base/headerWrapper';

export default function PortfolioHeader() {
  return (
    <HeaderWrapper>
      <Flex
        paddingX="15px"
        marginX="auto"
        maxWidth="1140px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading fontSize="2rem" marginBottom=".5rem">
          Portfolio
        </Heading>
        <Text marginBottom="1rem" textAlign="center">
          Welcome to my online portfolio. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm
          taking on freelance work at the moment. Want some help building your
          software?{' '}
        </Text>
        <Button background="primaryBlue" color="white">
          Contact Me
        </Button>
      </Flex>
    </HeaderWrapper>
  );
}
