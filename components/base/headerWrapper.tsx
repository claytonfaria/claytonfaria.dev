import { Box, useColorMode } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type HeaderWrapperProps = {
  children: ReactNode;
};

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  const { colorMode } = useColorMode();
  return (
    <Box
      background={colorMode === 'dark' ? 'gray.800' : 'lightBackground'}
      borderBottom="1px"
      borderBottomColor="rgba(255,255,255,0.1)"
      padding={{ base: '1rem', lg: '3rem' }}
      transition="background .2s"
    >
      {children}
    </Box>
  );
}
