import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  IconButton,
  Heading,
} from '@chakra-ui/core';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Profile() {
  return (
    <>
      <Heading fontSize="1.5rem" fontWeight="bold" paddingY="1.5rem">
        <Link>Clayton Faria</Link>
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
          Hi, I'm Clayton Faria and I'm web developer. Welcome to my personal
          website
        </Text>
        {/* Social icons */}
        <HStack justifyContent="center">
          <IconButton
            fontSize="1.5rem"
            as={Link}
            icon={<FaGithub />}
            variant="ghost"
            _hover={{ outline: 'none' }}
            _active={{ outline: 'none' }}
          />
          <IconButton
            fontSize="1.5rem"
            as={Link}
            icon={<FaTwitter />}
            variant="ghost"
            _hover={{ outline: 'none' }}
            _active={{ outline: 'none' }}
          />
          <IconButton
            fontSize="1.5rem"
            as={Link}
            icon={<FaLinkedin />}
            variant="ghost"
            _hover={{ outline: 'none' }}
            _active={{ outline: 'none' }}
          />
        </HStack>
        {/* //Social icons */}
      </Flex>
    </>
  );
}
