import { Box, Flex, HStack, Image, Text } from '@chakra-ui/core';

import SocialIcons from './socialIcons';

export default function Profile() {
  return (
    <Flex
      paddingTop="3rem"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      fontSize="sm"
    >
      <Box>
        <Image
          borderRadius="full"
          boxSize="160px"
          src="/images/profile-big.webp"
          fallbackSrc="/images/profile-big.jpg"
          marginBottom="1rem"
          alt="profile"
        />
      </Box>
      <Text marginBottom="1rem">
        Hi, my name is Clayton Faria and I'm web developer. Welcome to my
        personal website
      </Text>
      {/* Social icons */}
      <HStack justifyContent="center">
        <SocialIcons type="github" />
        <SocialIcons type="twitter" />
        <SocialIcons type="linkedin" />
      </HStack>
      {/* //Social icons */}
    </Flex>
  );
}
