import { Heading } from '@chakra-ui/core';

import Card from '../portfolio/card';

export default function Featured({ projects }) {
  return (
    <>
      <Heading
        borderLeftWidth="5px"
        borderLeftColor="primaryBlue"
        fontSize="2rem"
        paddingLeft="1.5rem"
        marginBottom="3rem"
      >
        Featured Projects
      </Heading>
      {projects
        .filter((project) => project.featured)
        .sort((a, b) => b.id - a.id)
        .map((project) => (
          <Card data={project} key={project.id} />
        ))}
    </>
  );
}
