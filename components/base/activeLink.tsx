import { ListItem, Icon, Link, useColorMode, Flex, FlexOptions } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';


type ActiveLinkProps = {
  children:ReactNode,
  href:string,
  icon:IconType,
  flexDirection?:FlexOptions["direction"],
}

export default function ActiveLink ({ children, href, icon, flexDirection }:ActiveLinkProps){
  const { colorMode } = useColorMode();
  const router = useRouter();

  

  return (
    <ListItem>
      <NextLink href={href}>
        <Flex
          direction={flexDirection}
          alignItems="center"
          justifyContent={flexDirection === 'column' ? '  space-evenly': undefined}
          as={Link}
          color={
            router.pathname === href && colorMode === 'dark'
              ? 'secondaryBlue'
              : router.pathname === href && colorMode === 'light' ? '#FED003':undefined
          }
          fontWeight={
            router.pathname === href && flexDirection !== 'column' ? 'bolder': undefined
          }
          _hover={{
            fontWeight: flexDirection !== 'column' ? 'bolder': undefined,
            textDecoration: 'none',
          }}
        >
          <Icon
            fontSize="1.2rem"
            verticalAlign="-.125rem"
            marginRight={flexDirection !== 'column' ? '.5rem': undefined}
            as={icon}
          />
          {children}
        </Flex>
      </NextLink>
    </ListItem>
  );
}