import { Flex, Box } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { cloneElement, ReactElement } from 'react';

import { projects } from '../../data/projects.json';
import { Footer } from '../base';

type ContainerProps = {
  children:ReactElement,
  router:any
}

export default function MainContainer({ children, router }:ContainerProps) {

  const pageTransitionAnimation = {
    pageAnimate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    pageInitial: {
      opacity: 0,
    },
  };

  const MotionBox = motion.custom(Box);
  return (
    <Flex
      direction="column"
      height="100vh"
      width="100%"
      marginLeft={{ base: '0', lg: '280px' }}
    >
      <MotionBox
        paddingX="0"
        marginX="0"
        flex="1"
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={pageTransitionAnimation}
      >
        {cloneElement(children, { projects })}
      </MotionBox>
      <Footer />
    </Flex>
  );
}
