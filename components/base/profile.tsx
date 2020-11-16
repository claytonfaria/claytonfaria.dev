import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

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
      <Box marginBottom="1rem">
        <Image
          src="/images/profile-big.webp"
          alt="profile"
          width={160}
          height={160}
          className="profileImg"
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
      <style global jsx>
        {`
          .profileImg {
            border-radius: 50%;
          }
        `}
      </style>
    </Flex>
  );
}
