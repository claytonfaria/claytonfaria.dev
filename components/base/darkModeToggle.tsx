import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      _hover={{ outline: 'none' }}
      size="sm"
      as="a"
      variant="ghost"
      onClick={toggleColorMode}
      fontSize={['1.4rem', '1.2rem']}
      color="highlightYellow"
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      aria-label="Select color mode"
      cursor="pointer"
    />
  );
}
