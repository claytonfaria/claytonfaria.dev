import {
  List,
  ListItem,
  Stack,
  Icon,
  Link,
  Box,
  useColorMode,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { BsPersonFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiPagesLine } from 'react-icons/ri';

export default function Navigation() {
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
      <ActiveLink href="/" icon={BsPersonFill}>
        About Me
      </ActiveLink>
      <ActiveLink href="/portfolio" icon={FaLaptopCode}>
        Portfolio
      </ActiveLink>
      <ActiveLink href="/resume" icon={RiPagesLine}>
        Resume
      </ActiveLink>
      <ActiveLink href="/contact" icon={FiMail}>
        Contact
      </ActiveLink>
    </Stack>
  );
}

function ActiveLink({ children, href, icon }) {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <ListItem>
      <Box
        as={Link}
        color={
          router.pathname === href && colorMode === 'dark'
            ? 'secondaryBlue'
            : 'white'
        }
        fontWeight={router.pathname === href && 'bolder'}
        _hover={{ fontWeight: 'bolder', textDecoration: 'none' }}
        onClick={handleClick}
      >
        <Icon
          fontSize="1.2rem"
          verticalAlign="-.125rem"
          marginRight=".5rem"
          as={icon}
        />
        {children}
      </Box>
    </ListItem>
  );
}
