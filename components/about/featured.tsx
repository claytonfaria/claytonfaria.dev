import { Heading } from '@chakra-ui/core';

import Card from '../portfolio/card';

type Props = {
  projects: [{
    id: number,
    title: string,
    description: string,
    tags: Array<string>,
    imgUrl: string,
    liveUrl: string,
    repoUrl: string,
    featured: boolean
  }]
}

export default function Featured({ projects }:Props) {
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
