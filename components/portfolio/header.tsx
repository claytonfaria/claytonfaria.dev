import { Text, Flex, Heading, Button, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

import { HeaderWrapper } from '../base';

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
          Welcome to my online portfolio. Here your will find some of the
          projects I created along with their core technologies. Want some help
          building your software?{' '}
        </Text>
        <NextLink href="/contact">
          <Button
            as={Link}
            marginBottom="1rem"
            minWidth="120px"
            background="primaryBlue"
            color="white"
            _hover={{ opacity: '0.9', textDecoration: 'none' }}
            _active={{ opacity: '0.9', textDecoration: 'none' }}
          >
            Contact Me
          </Button>
        </NextLink>
      </Flex>
    </HeaderWrapper>
  );
}
