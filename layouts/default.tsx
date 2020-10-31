import { Flex, useBreakpointValue } from '@chakra-ui/core';
import {ReactElement} from 'react'

import { BottomNavigation, PageMetadata } from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import SideBar from '../components/layout/sideBar';

type LayoutProps = {
  children:ReactElement,
}

export default function Layout({ children }:LayoutProps) {
  const deviceType = useBreakpointValue({ base: 'mobile', lg: 'desktop' });
  return (
    <>
      <PageMetadata />
      <Flex>
        {deviceType === 'desktop' && <SideBar />}

        <MainContainer>{children}</MainContainer>

        {deviceType === 'mobile' && <BottomNavigation />}
      </Flex>
    </>
  );
}
