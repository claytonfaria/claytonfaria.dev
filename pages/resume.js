import { Flex } from '@chakra-ui/core';

import ResumeHeader from '../components/resume/header';

export default function Resume() {
  const fileId = '1fx4ETI_Syhlav57HwstM-OZSrjNN1koZ';

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
