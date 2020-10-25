import { Button, Link } from '@chakra-ui/core';

export default function BaseButton({
  children,
  background = 'primaryBlue',
  href,
}) {
  return (
    <Button
      as={Link}
      href={href}
      isDisabled={href === ''}
      isExternal
      marginBottom="1rem"
      minWidth="120px"
      background={background}
      color="white"
      _hover={{ opacity: '0.9', textDecoration: 'none' }}
      _active={{ opacity: '0.9', textDecoration: 'none' }}
    >
      {children}
    </Button>
  );
}
