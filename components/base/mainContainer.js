import { Flex, Box } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { cloneElement } from 'react';

import { projects } from '../../data/projects.json';

import { Footer } from '.';

export default function MainContainer({ children, router }) {
  const pageTransitionAnimation = {
    pageAnimate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    pageInitial: {
      opacity: 0,
    },
  };

  const MotionFlex = motion.custom(Flex);
  return (
    <MotionFlex
      direction="column"
      height="100vh"
      width="100%"
      marginLeft="280px"
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={pageTransitionAnimation}
    >
      <Box paddingX="0" marginX="0" flex="1">
        {cloneElement(children, { projects })}
      </Box>
      <Footer />
    </MotionFlex>
  );
}
