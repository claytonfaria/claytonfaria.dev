import { Heading, Text, Flex, useColorMode, Box, ColorMode } from '@chakra-ui/core';
import Image from 'next/image';

export default function TechSkills() {
  const { colorMode } = useColorMode();

  const techSkills = [
    { skill: 'javascript', width: '64' },
    { skill: 'typescript', width: '64' },
    { skill: 'css', width: '64' },
    { skill: 'html', width: '64' },
    { skill: 'react', width: '91' },
    { skill: 'nextjs', width: '107' },
    { skill: 'node', width: '104' },
    { skill: 'express', width: '128' },
    { skill: 'python', width: '64' },
    { skill: 'pandas', width: '128' },
  ];
  return (
    <>
      <Heading
        borderLeftWidth="5px"
        borderLeftColor="primaryBlue"
        fontSize="2rem"
        paddingLeft="1.5rem"
        marginBottom="1rem"
      >
        Tech Skills
      </Heading>
      <Text marginBottom="1rem">
        Below is a quick overview of my main technical skill sets and
        technologies I use.
      </Text>

      <Flex justifyContent="center" flexWrap="wrap">
        {techSkills.map((icon, index) => (
          <Skill
            colorMode={colorMode}
            src={`/images/skills/${icon.skill.toLowerCase()}.svg`}
            alt={icon.skill}
            width={icon.width}
            key={index}
          />
        ))}
      </Flex>
    </>
  );
}

type Skill={
  colorMode:ColorMode,
  src:string,
  alt:string,
  width:string
}


function Skill({ colorMode, src, alt, width }:Skill) {
  return (
    <Box
      margin="0.5rem"
      borderRadius=".5rem"
      padding="0.5rem"
      background={colorMode === 'dark' ? 'white':undefined}
    >
      <Image src={src} alt={alt} height="64px" width={width} />
    </Box>
  );
}
