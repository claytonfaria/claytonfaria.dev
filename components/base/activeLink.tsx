import type { FlexOptions } from '@chakra-ui/react';
import { ListItem, Icon, Link, useColorMode, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

type ActiveLinkProps = {
  children: ReactNode;
  href: string;
  icon: IconType;
  flexDirection?: FlexOptions['direction'];
};

export default function ActiveLink({
  children,
  href,
  icon,
  flexDirection,
}: ActiveLinkProps) {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <ListItem>
      <NextLink href={href} passHref>
        <Flex
          direction={flexDirection}
          alignItems="center"
          justifyContent={
            flexDirection === 'column' ? '  space-evenly' : undefined
          }
          as={Link}
          color={
            router.pathname === href && colorMode === 'dark'
              ? 'secondaryBlue'
              : router.pathname === href && colorMode === 'light'
              ? '#FED003'
              : undefined
          }
          fontWeight={
            router.pathname === href && !flexDirection ? 'bolder' : undefined
          }
          _hover={{
            fontWeight: flexDirection ? undefined : 'bolder',
            textDecoration: 'none',
          }}
        >
          <Icon
            fontSize="1.2rem"
            verticalAlign="-.125rem"
            marginRight={flexDirection ? undefined : '.5rem'}
            as={icon}
          />
          {children}
        </Flex>
      </NextLink>
    </ListItem>
  );
}
