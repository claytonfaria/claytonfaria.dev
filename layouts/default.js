import { Flex } from '@chakra-ui/core';

import MainContainer from '../components/base/mainContainer';
import SideBar from '../components/base/sideBar';

export default function Layout({ children, router }) {
  return (
    <Flex>
      <SideBar />
      <MainContainer router={router}>{children}</MainContainer>
    </Flex>
  );
}
