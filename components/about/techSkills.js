import {
  Grid,
  Container,
  Heading,
  Text,
  Box,
  Flex,
  Icon,
} from '@chakra-ui/core';
import { FaJsSquare } from 'react-icons/fa';

export default function TechSkills() {
  return (
    <Container maxWidth="1140px" paddingX="15px" marginX="auto">
      <Heading
        borderLeftWidth="5px"
        borderLeftColor="green.500"
        fontSize="2rem"
        paddingLeft="1.5rem"
        marginBottom="1rem"
      >
        What I do
      </Heading>
      <Text marginBottom="3rem">
        I have more than 10 years' experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies I use. Want to find out more about my experience?
        Check out my online resume and project portfolio.
      </Text>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        <Flex direction="column">
          <Icon as={FaJsSquare} fontSize="2rem" marginBottom="0.3rem" />
          <Heading fontSize="1rem" marginBottom=".5rem">
            Vanilla JavaScript
          </Heading>
          <Text fontSize="0.875rem">
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Text>
        </Flex>
        <Flex direction="column">
          <Icon as={FaJsSquare} fontSize="2rem" marginBottom="0.3rem" />
          <Heading fontSize="1rem" marginBottom=".5rem">
            Vanilla JavaScript
          </Heading>
          <Text fontSize="0.875rem">
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Text>
        </Flex>
        <Flex direction="column">
          <Icon as={FaJsSquare} fontSize="2rem" marginBottom="0.3rem" />
          <Heading fontSize="1rem" marginBottom=".5rem">
            Vanilla JavaScript
          </Heading>
          <Text fontSize="0.875rem">
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Text>
        </Flex>
        <Flex direction="column">
          <Icon as={FaJsSquare} fontSize="2rem" marginBottom="0.3rem" />
          <Heading fontSize="1rem" marginBottom=".5rem">
            Vanilla JavaScript
          </Heading>
          <Text fontSize="0.875rem">
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Text>
        </Flex>
      </Grid>
    </Container>
  );
}
