import { Container, Box, Heading } from '@chakra-ui/core';
import ContactForm from '../components/contact/contactForm';
import ContactHeader from '../components/contact/header';
import { Text, Flex, Divider } from '@chakra-ui/core';

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <Flex
        paddingX="15px"
        marginX="auto"
        maxWidth="1140px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        paddingTop="3rem"
      >
        <Heading fontSize="1.75rem" marginBottom="1rem">
          Get in Touch
        </Heading>
      </Flex>
      <ContactForm />
    </>
  );
}
