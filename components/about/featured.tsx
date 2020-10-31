import { Heading } from '@chakra-ui/core';
import { Projects } from '../../data/project.types';

import Card from '../portfolio/card';

export default function Featured({ projects }:Projects) {
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
          <Card project={project} key={project.id} />
        ))}
    </>
  );
}
