import {
  List,
  ListItem,
  Stack,
  Icon,
  Link,
  useColorMode,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { BsPersonFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiPagesLine } from 'react-icons/ri';

export default function Navigation() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Stack
      spacing={4}
      as={List}
      listStyleType="none"
      fontWeight="600"
      alignSelf="flex-start"
      marginX="1.5rem"
      paddingX="1rem"
      color="rgba(255,255,255,0.8)"
    >
      <ListItem>
        <NextLink href="/">
          <Link
            color={router.pathname === '/' && '#4B90FF'}
            fontWeight={router.pathname === '/' && 'bolder'}
            _hover={{
              color: 'white',
              fontWeight: 'bolder',
              textDecoration: 'none',
            }}
          >
            <Icon
              fontSize="1.2rem"
              verticalAlign="-.125rem"
              marginRight=".5rem"
              as={BsPersonFill}
            />
            About Me
          </Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/portfolio">
          <Link
            color={router.pathname === '/portfolio' && 'white'}
            fontWeight={router.pathname === '/portfolio' && 'bolder'}
            _hover={{
              color: 'white',
              fontWeight: 'bolder',
              textDecoration: 'none',
            }}
          >
            <Icon
              fontSize="1.2rem"
              verticalAlign="-.125rem"
              marginRight=".5rem"
              as={FaLaptopCode}
            />
            Portfolio
          </Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/resume">
          <Link
            color={router.pathname === '/resume' && 'white'}
            fontWeight={router.pathname === '/resume' && 'bolder'}
            _hover={{
              color: 'white',
              fontWeight: 'bolder',
              textDecoration: 'none',
            }}
          >
            <Icon
              fontSize="1.2rem"
              verticalAlign="-.125rem"
              marginRight=".5rem"
              as={RiPagesLine}
            />
            Resume
          </Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/contact">
          <Link
            color={router.pathname === '/contact' && 'white'}
            fontWeight={router.pathname === '/contact' && 'bolder'}
            _hover={{
              color: 'white',
              fontWeight: 'bolder',
              textDecoration: 'none',
            }}
          >
            <Icon
              fontSize="1.2rem"
              verticalAlign="-.125rem"
              marginRight=".5rem"
              as={FiMail}
            />
            Contact
          </Link>
        </NextLink>
      </ListItem>
    </Stack>
  );
}
