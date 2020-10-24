import { Flex } from '@chakra-ui/core';

import MainContainer from '../components/base/mainContainer';
import SideBar from '../components/base/sideBar';

export default function Layout({ children }) {
  return (
    <Flex>
      <SideBar />

      <MainContainer>{children}</MainContainer>
    </Flex>
  );
}
