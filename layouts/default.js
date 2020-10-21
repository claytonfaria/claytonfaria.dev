import { Flex } from '@chakra-ui/core';

import {
  DarkModeToggle,
  Navigation,
  Profile,
  SectionDivider,
  SideBar,
} from '../components/base';
import MainContainer from '../components/base/mainContainer';

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
      <MainContainer>{children}</MainContainer>
    </Flex>
  );
}
