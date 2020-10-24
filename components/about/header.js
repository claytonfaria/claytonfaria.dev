import {
  Text,
  Flex,
  Image,
  Heading,
  ButtonGroup,
  Button,
} from '@chakra-ui/core';

import HeaderWrapper from '../base/headerWrapper';

export default function AboutHeader() {
  return (
    <HeaderWrapper>
      <Flex
        paddingX="15px"
        marginX="auto"
        maxWidth="1140px"
        direction={['column', 'column', 'column', 'row']}
      >
        <Flex direction="column" flex="1">
          <Heading as="h2" fontSize="4xl" marginBottom=".25rem">
            Clayton Faria
          </Heading>
          <Text fontSize="1.5rem" fontWeight="300" marginBottom="1rem">
            Web Developer
          </Text>
          <Text marginBottom="1.5rem">
            I'm a software engineer specialised in frontend and backend
            development for complex scalable web apps. I write about software
            development on my blog. Want to know how I may help your project?
            Check out my project portfolio and online resume.
          </Text>
          <ButtonGroup spacing={3} marginBottom="1.4rem">
            <Button marginBottom="1rem" background="primaryBlue" color="white">
              View Portfolio
            </Button>
            <Button marginBottom="1rem" background="teal.600" color="white">
              View Resume
            </Button>
          </ButtonGroup>
        </Flex>
        <Image
          src="/profile-big.webp"
          marginLeft={['0', '0', '0', '3rem']}
          width="400px"
          maxHeight="300px"
          objectFit="cover"
        />
      </Flex>
    </HeaderWrapper>
  );
}
