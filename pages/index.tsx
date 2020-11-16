import { Container, Box, Divider } from '@chakra-ui/react';

import Featured from '../components/about/featured';
import AboutHeader from '../components/about/header';
import TechSkills from '../components/about/techSkills';
import type { Project } from '../data/types';

type HomeProps = {
  projects: Project[];
};

export default function Home({ projects }: HomeProps) {
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
