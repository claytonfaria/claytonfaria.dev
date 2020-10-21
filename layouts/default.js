import { Flex, Heading, Link, Divider, Container } from '@chakra-ui/core';

import DarkModeToggle from '../components/base/darkModeToggle';
import Navigation from '../components/base/navigation';
import Profile from '../components/base/profile';
import SectionDivider from '../components/base/sectionDivider';
import SideBar from '../components/base/sideBar';

export default function Layout({ children }) {
  return (
    <Flex>
      <SideBar>
        <Profile />
        <SectionDivider />
        <Navigation />
        <SectionDivider />
        <DarkModeToggle />
      </SideBar>
      <Flex direction="column" height="100vh">
        <Container flex="1">{children}</Container>
        <Flex>I am the footer</Flex>
      </Flex>
    </Flex>
  );
}
