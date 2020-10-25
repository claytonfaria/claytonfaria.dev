import { Heading, Text, Flex, Image, useColorMode, Box } from '@chakra-ui/core';

export default function TechSkills() {
  const { colorMode } = useColorMode();

  const techSkills = [
    'javascript',
    'css',
    'html',
    'react',
    'nextjs',
    'node',
    'express',
    'python',
    'pandas',
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
        What I do
      </Heading>
      <Text marginBottom="1rem">
        I have more than 10 years' experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies I use. Want to find out more about my experience?
        Check out my online resume and project portfolio.
      </Text>

      <Flex justifyContent="center" flexWrap="wrap">
        {techSkills.map((skill, index) => (
          <Skill
            colorMode={colorMode}
            src={`/images/skills/${skill.toLowerCase()}.svg`}
            alt={skill}
            key={index}
          />
        ))}
      </Flex>
    </>
  );
}

function Skill({ colorMode, src, alt }) {
  return (
    <Box
      margin="1rem"
      borderRadius=".5rem"
      background={colorMode === 'dark' && 'white'}
    >
      <Image src={src} alt={alt} maxWidth="8rem" height="4rem" margin="1rem" />
    </Box>
  );
}
