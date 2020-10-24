import { Flex } from '@chakra-ui/core';

import ResumeHeader from '../components/resume/header';

export default function Resume() {
  return (
    <>
      <ResumeHeader />

      <Flex
        paddingX="15px"
        marginX="auto"
        maxWidth="1140px"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        paddingTop="3rem"
        height="800px"
      >
        <iframe
          title="resume"
          src="https://drive.google.com/file/d/0B-kFW_-a3s5NcjJKOVY3OWRyd1k/preview"
          width="100%"
          height="100%"
        />
      </Flex>
    </>
  );
}
