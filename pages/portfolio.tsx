import { Container, Box, Heading } from '@chakra-ui/core';

import Card from '../components/portfolio/card';
import PortfolioHeader from '../components/portfolio/header';

type Props = {
  projects: [{
    id: number,
    title: string,
    description: string,
    tags: Array<string>,
    imgUrl: string,
    liveUrl: string,
    repoUrl: string,
    featured: boolean
  }]
}


export default function Portfolio({ projects }:Props) {
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
            // .sort((a, b) => b.id - a.id)
            .map((project) => (
              <Card project={project} key={project.id} />
            ))}
        </Container>
      </Box>
    </>
  );
}