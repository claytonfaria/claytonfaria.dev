import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import Image from 'next/image';

import { BaseButton } from '../base';

type Props = {
  project: {
    id: number,
    title: string,
    description: string,
    tags: Array<string>,
    imgUrl: string,
    liveUrl: string,
    repoUrl: string,
    featured: boolean
  }
}



export default function Card({ project }:Props) {
  if (!project) return null
  const { title, description, tags, imgUrl, liveUrl, repoUrl } = project;

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
      <Box flex="1" maxWidth={{ base: '100%', xl: '33%' }}>
        <Image width={800} height={600} src={imgUrl} alt="project image" />
      </Box>
      <Flex direction="column" flex="2" padding="1rem">
        <Heading size="lg" marginBottom="1rem">
          {title}
        </Heading>
        <Text marginBottom="1rem">{description}</Text>
        <Flex marginBottom="1rem" flexWrap="wrap">
          {tags.map((tag, index) => (
            <Text
              key={index}
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
              {tag}
            </Text>
          ))}
        </Flex>

        <ButtonGroup>
          <BaseButton href={liveUrl}>Live</BaseButton>
          <BaseButton href={repoUrl} background="teal.700">
            GitHub
          </BaseButton>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
