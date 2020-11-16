import { Button, Link } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type BaseButtonProps = {
  children: ReactNode;
  href: string;
  background?: string;
};

export default function BaseButton({
  children,
  background,
  href,
}: BaseButtonProps) {
  return (
    <Button
      as={Link}
      href={href ? href : undefined}
      isDisabled={!href}
      isExternal
      marginBottom="1rem"
      minWidth="120px"
      background={background ? background : 'primaryBlue'}
      color="white"
      _hover={{ opacity: '0.9', textDecoration: 'none' }}
      _active={{ opacity: '0.9', textDecoration: 'none' }}
    >
      {children}
    </Button>
  );
}
