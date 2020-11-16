import {
  Text,
  Flex,
  Heading,
  ButtonGroup,
  useBreakpointValue,
  Button,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { DarkModeToggle, HeaderWrapper } from '../base';

export default function AboutHeader() {
  const deviceType = useBreakpointValue({ base: 'mobile', lg: 'desktop' });

  return (
    <HeaderWrapper>
      <Flex
        paddingX="15px"
        marginX="auto"
        maxWidth="1140px"
        direction={['column', 'column', 'column', 'row']}
      >
        <Flex direction="column" flex="1">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" fontSize="4xl" marginBottom=".25rem">
              Clayton Faria
            </Heading>
            {deviceType === 'mobile' && <DarkModeToggle />}
          </Flex>
          <Text fontSize="1.5rem" fontWeight="300" marginBottom="1rem">
            Web Developer
          </Text>
          <Text marginBottom="1.5rem">
            I am a Brazilian 🇧🇷 <strong>web developer</strong> living in awesome
            Taiwan 🇹🇼, the Heart of Asia. I mostly code with{' '}
            <strong>JavaScript / TypeScript </strong>
            (React.js/Next.js & Node.js), but I also have some experience with
            Python and others.
          </Text>
          <Text marginBottom="1.5rem">
            Check out my project portfolio and online resume.
          </Text>
          <ButtonGroup spacing={3} marginBottom="0" paddingBottom="0">
            <NextLink href="/portfolio">
              <Button
                as={Link}
                marginBottom="1rem"
                minWidth="120px"
                background="primaryBlue"
                color="white"
                _hover={{ opacity: '0.9', textDecoration: 'none' }}
                _active={{ opacity: '0.9', textDecoration: 'none' }}
              >
                View Portfolio
              </Button>
            </NextLink>
            <NextLink href="/resume">
              <Button
                as={Link}
                minWidth="120px"
                background="teal.700"
                color="white"
                _hover={{ opacity: '0.9', textDecoration: 'none' }}
                _active={{ opacity: '0.9', textDecoration: 'none' }}
              >
                View Resume
              </Button>
            </NextLink>
          </ButtonGroup>
        </Flex>
      </Flex>
    </HeaderWrapper>
  );
}
