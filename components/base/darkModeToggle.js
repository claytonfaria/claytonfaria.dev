import { HStack, Text, Switch, useColorMode } from '@chakra-ui/core';

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="center" fontSize="sm">
      <Text
        fontWeight={colorMode === 'light' && 'bold'}
        opacity={colorMode === 'dark' && '0.3'}
      >
        Light
      </Text>
      <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} />
      <Text
        opacity={colorMode === 'light' && '0.3'}
        fontWeight={colorMode === 'dark' && 'bold'}
      >
        Dark
      </Text>
    </HStack>
  );
}
