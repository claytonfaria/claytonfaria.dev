import { Link, IconButton } from '@chakra-ui/core';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialIcons({ type }) {
  const url = {
    github: 'https://github.com/claytonfaria',
    linkedin: 'https://www.linkedin.com/in/claytonfaria/',
    twitter: 'https://twitter.com/fariaclayton',
  };

  const icon = {
    github: <FaGithub />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />,
  };
  return (
    <IconButton
      href={url[type]}
      isExternal
      fontSize="1.5rem"
      as={Link}
      icon={icon[type]}
      variant="ghost"
      aria-label={type}
      _hover={{
        outline: 'none',
        transform: 'translateY(-5px)',
        color: 'highlightYellow',
      }}
      _active={{ outline: 'none' }}
    />
  );
}
