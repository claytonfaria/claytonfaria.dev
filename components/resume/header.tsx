import { Flex, Heading } from '@chakra-ui/core';

import BaseButton from '../base/button';
import HeaderWrapper from '../base/headerWrapper';

type ResumeHeaderProps = {
  fileId:string
}

export default function ResumeHeader({ fileId }:ResumeHeaderProps) {
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
        <BaseButton
          href={`https://drive.google.com/uc?export=download&id=${fileId}`}
        >
          Download PDF Version
        </BaseButton>
      </Flex>
    </HeaderWrapper>
  );
}
