import { Button } from '@chakra-ui/core';

export default function BaseButton({ children, background = 'primaryBlue' }) {
  return (
    <Button
      marginBottom="1rem"
      minWidth="120px"
      background={background}
      color="white"
      _hover={{ opacity: '0.9' }}
      _active={{ opacity: '0.9' }}
    >
      {children}
    </Button>
  );
}
