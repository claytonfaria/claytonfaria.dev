import { Container, Box, Heading } from '@chakra-ui/core';

import Card from '../components/portfolio/card';
import PortfolioHeader from '../components/portfolio/header';

export default function Portfolio({ projects }) {
  return (
    <>
      <PortfolioHeader />
      <Box padding={{ base: '1rem', lg: '3rem' }}>
        <Container maxWidth="1140px" paddingX="15px" marginX="auto">
          <Heading
            borderLeftWidth="5px"
            borderLeftColor="primaryBlue"
            fontSize="2rem"
            paddingLeft="1.5rem"
            marginBottom="3rem"
          >
            Projects
          </Heading>
          {projects
            .filter((project) => project.featured)
            .sort((a, b) => b.id - a.id)
            .map((project) => (
              <Card data={project} key={project.id} />
            ))}
        </Container>
      </Box>
    </>
  );
}
