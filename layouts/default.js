import { Flex } from '@chakra-ui/core';

import { SideBar } from '../components/base';
import MainContainer from '../components/base/mainContainer';

export default function Layout({ children }) {
  return (
    <Flex>
      <SideBar />

      <MainContainer>{children}</MainContainer>
    </Flex>
  );
}
