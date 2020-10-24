import { Text, Flex, Heading, HStack, Link } from '@chakra-ui/core';

import { SocialIcons } from '../base';
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
          can fill in the contact form below or send me an email{' '}
          <Link
            color="primaryBlue"
            fontWeight="bold"
            href="mailto: hello@claytonfaria.dev"
            _hover={{ textDecoration: 'none' }}
          >
            hello@claytonfaria.dev
          </Link>
        </Text>
        <Text marginBottom="1rem" textAlign="center">
          Want to get connected? Follow me on the social channles below.
        </Text>
        <HStack justifyContent="center">
          <SocialIcons type="github" />
          <SocialIcons type="twitter" />
          <SocialIcons type="linkedin" />
        </HStack>
      </Flex>
    </HeaderWrapper>
  );
}
