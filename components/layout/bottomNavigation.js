import { HStack, useColorMode } from '@chakra-ui/core';
import { BsPersonFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiPagesLine } from 'react-icons/ri';

import { ActiveLink } from '../base';

export default function BottomNavigation() {
  const { colorMode } = useColorMode();
  return (
    <HStack
      as="ul"
      width="100%"
      boxShadow="0 -10px 10px rgba(0,0,0,.2)"
      left="0"
      bottom="0"
      position="fixed"
      height="4rem"
      justifyContent="space-evenly"
      alignItems="center"
      background={colorMode === 'dark' ? 'primaryDark' : 'primaryBlue'}
      color="white"
      display="flex"
      zIndex={1000}
      listStyleType="none"
      fontWeight="600"
      fontSize="0.875rem"
    >
      <ActiveLink href="/" icon={BsPersonFill} flexDirection="column">
        About Me
      </ActiveLink>
      <ActiveLink href="/portfolio" icon={FaLaptopCode} flexDirection="column">
        Portfolio
      </ActiveLink>
      <ActiveLink href="/resume" icon={RiPagesLine} flexDirection="column">
        Resume
      </ActiveLink>
      <ActiveLink href="/contact" icon={FiMail} flexDirection="column">
        Contact
      </ActiveLink>
    </HStack>
  );
}
