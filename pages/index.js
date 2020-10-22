import { Text, Container, Flex, Box, Divider } from '@chakra-ui/core';
import AboutHeader from '../components/about/header';
import TechSkills from '../components/about/techSkills';
import { SectionDivider } from '../components/base';

export default function Home() {
  return (
    <>
      <AboutHeader />
      <Box padding="3rem">
        <TechSkills />
        <Divider orientation="horizontal" marginY="4rem" />
      </Box>
    </>
  );
}
