import { Box } from '@chakra-ui/core';

import { useColorModeValue } from '@chakra-ui/core';

import { DarkModeToggle, Navigation, Profile, SectionDivider } from '.';

export default function SideBar() {
  const sideBarColor = useColorModeValue('highlightColor', '#1e2a3a');

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
      <DarkModeToggle />
    </Box>
  );
}
