import { List, ListItem, Stack, Icon } from '@chakra-ui/core';
import { BsPersonFill } from 'react-icons/bs';
import { FaLaptopCode, FaBlog } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiPagesLine } from 'react-icons/ri';

export default function Navigation() {
  return (
    <Stack
      spacing={4}
      as={List}
      listStyleType="none"
      fontWeight="600"
      alignItems="flex-start"
      marginX="1.5rem"
      paddingX="1rem"
    >
      <ListItem>
        <Icon
          fontSize="1.2rem"
          verticalAlign="-.125rem"
          marginRight=".5rem"
          as={BsPersonFill}
        />
        About Me
      </ListItem>
      <ListItem>
        <Icon
          fontSize="1.2rem"
          verticalAlign="-.125rem"
          marginRight=".5rem"
          as={FaLaptopCode}
        />
        Portfolio
      </ListItem>
      <ListItem>
        <Icon
          fontSize="1.2rem"
          verticalAlign="-.125rem"
          marginRight=".5rem"
          as={RiPagesLine}
        />
        Resume
      </ListItem>
      <ListItem>
        <Icon
          fontSize="1.2rem"
          verticalAlign="-.125rem"
          marginRight=".5rem"
          as={FaBlog}
        />
        Blog
      </ListItem>
      <ListItem>
        <Icon
          fontSize="1.2rem"
          verticalAlign="-.125rem"
          marginRight=".5rem"
          as={FiMail}
        />
        Contact
      </ListItem>
    </Stack>
  );
}
