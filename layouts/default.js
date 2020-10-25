import { Flex, useBreakpointValue } from '@chakra-ui/core';

import { BottomNavigation, PageMetadata } from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import SideBar from '../components/layout/sideBar';

export default function Layout({ children, router }) {
  const deviceType = useBreakpointValue({ base: 'mobile', lg: 'desktop' });
  return (
    <>
      <PageMetadata />
      <Flex>
        {deviceType === 'desktop' && <SideBar />}

        <MainContainer router={router}>{children}</MainContainer>

        {deviceType === 'mobile' && <BottomNavigation />}
      </Flex>
    </>
  );
}
