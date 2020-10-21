import { HStack, Text, Switch, useColorMode } from '@chakra-ui/core';

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="center">
      <Text>Light</Text>
      <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} />
      <Text>Dark</Text>
    </HStack>
  );
}
