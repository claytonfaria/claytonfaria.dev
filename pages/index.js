import { Container, Box, Divider } from '@chakra-ui/core';

import Featured from '../components/about/featured';
import AboutHeader from '../components/about/header';
import TechSkills from '../components/about/techSkills';

export default function Home({ projects }) {
  return (
    <>
      <AboutHeader />
      <Box padding="3rem">
        <Container maxWidth="1140px" paddingX="15px" marginX="auto">
          <TechSkills />
          <Divider orientation="horizontal" marginY="4rem" />
          <Featured projects={projects} />
        </Container>
      </Box>
    </>
  );
}
