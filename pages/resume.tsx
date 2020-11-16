import { Flex } from '@chakra-ui/react';

import ResumeHeader from '../components/resume/header';

export default function Resume() {
  const fileId = '1UhzSYmJq8gd2uJ5RhWbcRR4jmAUoeKCL';

  return (
    <>
      <ResumeHeader fileId={fileId} />

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
          src={`https://drive.google.com/file/d/${fileId}/preview`}
          width="100%"
          height="100%"
        />
      </Flex>
    </>
  );
}
