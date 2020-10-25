import { ListItem, Icon, Link, useColorMode, Flex } from '@chakra-ui/core';
import { useRouter } from 'next/router';

export default function ActiveLink({ children, href, icon, flexDirection }) {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <ListItem>
      <Flex
        direction={flexDirection}
        alignItems="center"
        justifyContent={flexDirection === 'column' && '  space-evenly'}
        as={Link}
        color={
          router.pathname === href && colorMode === 'dark'
            ? 'secondaryBlue'
            : router.pathname === href && colorMode === 'light' && '#FED003'
        }
        fontWeight={
          router.pathname === href && flexDirection !== 'column' && 'bolder'
        }
        _hover={{
          fontWeight: flexDirection !== 'column' && 'bolder',
          textDecoration: 'none',
        }}
        onClick={handleClick}
      >
        <Icon
          fontSize="1.2rem"
          verticalAlign="-.125rem"
          marginRight={flexDirection !== 'column' && '.5rem'}
          as={icon}
        />
        {children}
      </Flex>
    </ListItem>
  );
}