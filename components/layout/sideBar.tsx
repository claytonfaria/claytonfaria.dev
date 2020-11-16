import { Box, useColorModeValue, Flex, Text } from '@chakra-ui/react';

import { DarkModeToggle, Profile, SectionDivider } from '../base';
import Navigation from './navigation';

export default function SideBar() {
  const sideBarColor = useColorModeValue('primaryBlue', 'primaryDark');

  return (
    <Box
      height="100vh"
      marginX="auto"
      position="fixed"
      width="280px"
      minWidth="280px"
      background={sideBarColor}
      color="white"
      overflowY="auto"
      paddingX="1rem"
      paddingBottom="1.5rem"
    >
      <Profile />
      <SectionDivider />
      <Navigation />
      <SectionDivider />
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Text marginBottom=".5rem" fontWeight="bold">
          Color Mode
        </Text>
        <DarkModeToggle />
      </Flex>
    </Box>
  );
}
