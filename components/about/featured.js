import { Heading } from '@chakra-ui/core';

import Card from '../portfolio/card';

export default function Featured() {
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
      <Card />
      <Card />
    </>
  );
}
