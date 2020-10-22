import { Box } from '@chakra-ui/core';

export default function HeaderWrapper({ children }) {
  return (
    <Box background="#fafafa" padding="3rem">
      {children}
    </Box>
  );
}
