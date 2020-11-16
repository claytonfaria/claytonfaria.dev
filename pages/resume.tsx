/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Flex, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';

import ResumeHeader from '../components/resume/header';

export default function Resume() {
  const [loaded, setLoaded] = useState(false);

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
      >
        <Skeleton isLoaded={loaded} width="100%" height="100%">
          <iframe
            title="resume"
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            width="100%"
            height="800px"
            onLoad={() => {
              setLoaded(true);
            }}
          />
        </Skeleton>
      </Flex>
    </>
  );
}
