import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/core';

export default function Card() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      background={colorMode === 'dark' ? 'primaryDark' : 'lightBackground'}
      padding="1rem"
      borderRadius=".25rem"
      direction={{ base: 'column', xl: 'row' }}
      alignItems="center"
      boxShadow="lg"
      marginBottom="2rem"
    >
      <Box flex="1">
        <Image width="100%" height="auto" src="/marketnews2.png" border="1px" />
      </Box>
      <Flex direction="column" flex="2" padding="1rem">
        <Heading size="lg" marginBottom="1rem">
          Market News
        </Heading>
        <Text marginBottom="1rem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          iure saepe, magni non, dolores cupiditate aperiam, officia eligendi
          eveniet ipsum perspiciatis vel distinctio quibusdam! Placeat
        </Text>
        <Flex marginBottom="1rem" flexWrap="wrap">
          <Text
            letterSpacing=".05rem"
            textTransform="uppercase"
            px=".5rem"
            py=".25rem"
            marginBottom=".5rem"
            marginRight=".5rem"
            borderWidth="1px"
            fontSize=".66rem"
            borderRadius="full"
            fontWeight="500"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            JavaScript
          </Text>
        </Flex>
        <ButtonGroup>
          <Button background="primaryBlue" width="120px" color="white">
            Live
          </Button>
          <Button background="teal.600" width="120px" color="white">
            GitHub
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
