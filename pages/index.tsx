import { Container, Box, Divider } from '@chakra-ui/core';

import Featured from '../components/about/featured';
import AboutHeader from '../components/about/header';
import TechSkills from '../components/about/techSkills';

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


export default function Home({ projects }:Props) {
  return (
    <>
      <AboutHeader />
      <Box padding={{ base: '1rem', lg: '3rem' }} paddingTop="3rem">
        <Container maxWidth="1140px" paddingX="15px" marginX="auto">
          <TechSkills />
          <Divider orientation="horizontal" marginY="3rem" />
          <Featured projects={projects} />
        </Container>
      </Box>
    </>
  );
}
