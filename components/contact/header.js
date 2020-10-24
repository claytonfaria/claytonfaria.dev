import { Text, Flex, Heading, Icon, HStack } from '@chakra-ui/core';
import { FaTwitter } from 'react-icons/fa';

import HeaderWrapper from '../base/headerWrapper';

export default function ContactHeader() {
  return (
    <HeaderWrapper>
      <Flex
        paddingX="15px"
        marginX="auto"
        maxWidth="1140px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading fontSize="2rem" marginBottom=".5rem">
          Contact
        </Heading>
        <Text marginBottom="1rem" textAlign="center">
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to
          hello@claytonfaria.dev
        </Text>
        <Text marginBottom="1rem" textAlign="center">
          Want to get connected? Follow me on the social channles below.
        </Text>
        <HStack>
          <Icon as={FaTwitter} />
          <Icon as={FaTwitter} />
          <Icon as={FaTwitter} />
        </HStack>
      </Flex>
    </HeaderWrapper>
  );
}
