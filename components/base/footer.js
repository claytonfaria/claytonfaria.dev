import { Flex, Text } from '@chakra-ui/core';

export default function Footer() {
  return (
    <Flex justifyContent="center" alignItems="center" margin="1rem">
      <Text fontSize="sm">
        Copyright &copy; {new Date().getFullYear()} Clayton Faria. All Rights
        Reserved.
      </Text>
    </Flex>
  );
}
