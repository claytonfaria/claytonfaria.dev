import { Flex, Heading, Button } from '@chakra-ui/core';

import HeaderWrapper from '../base/headerWrapper';

export default function ResumeHeader() {
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
        <Heading fontSize="2rem" marginBottom="1rem">
          Online Resume
        </Heading>
        <Button colorScheme="blue">Download PDF Version</Button>
      </Flex>
    </HeaderWrapper>
  );
}
