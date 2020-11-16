import { Heading } from '@chakra-ui/core';
import { Project } from '../../data/project.types';

import Card from '../portfolio/card';

type FeaturedProps = {
  projects: Project[];
};

export default function Featured({ projects }: FeaturedProps) {
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
