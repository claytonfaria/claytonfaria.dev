import { List, Stack } from '@chakra-ui/react';
import { BsPersonFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiPagesLine } from 'react-icons/ri';

import { ActiveLink } from '../base';

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
