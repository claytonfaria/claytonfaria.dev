import { Container, Box, Heading } from '@chakra-ui/core';

import Card from '../components/portfolio/card';
import PortfolioHeader from '../components/portfolio/header';

export default function Portfolio() {
  return (
    <>
      <PortfolioHeader />
      <Box padding="3rem">
        <Container maxWidth="1140px" paddingX="15px" marginX="auto">
          <Heading
            borderLeftWidth="5px"
            borderLeftColor="highlightColor"
            fontSize="2rem"
            paddingLeft="1.5rem"
            marginBottom="3rem"
          >
            Projects
          </Heading>
          <Card />
        </Container>
      </Box>
    </>
  );
}
