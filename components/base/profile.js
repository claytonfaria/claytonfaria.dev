import { Box, Flex, HStack, Image, Text, Heading } from '@chakra-ui/core';

import SocialIcons from './socialIcons';

export default function Profile() {
  return (
    <>
      <Heading
        fontSize="1.5rem"
        fontWeight="bold"
        paddingY="1.5rem"
        textAlign="center"
      >
        {/* <Link _hover={{ textDecoration: 'none', color: 'white' }}>
          Clayton Faria
        </Link> */}
      </Heading>
      <Flex
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
            src="/profile-big.webp"
            marginBottom="1rem"
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
    </>
  );
}
