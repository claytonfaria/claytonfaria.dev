import { Container, Box, Heading } from '@chakra-ui/react';

import Card from '../components/portfolio/card';
import PortfolioHeader from '../components/portfolio/header';
import type { Project } from '../data/types';

type PortfolioProps = {
  projects: Project[];
};

export default function Portfolio({ projects }: PortfolioProps) {
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
            .sort((a, b) => b.id - a.id)
            .map((project) => (
              <Card project={project} key={project.id} />
            ))}
        </Container>
      </Box>
    </>
  );
}
