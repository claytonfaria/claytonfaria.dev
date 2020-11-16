import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Container,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

type SubmitStatus = {
  submitted?: boolean;
  submitting?: boolean;
  info: { error: boolean; msg: string | null };
};

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        email: '',
        message: '',
        name: '',
      });
    } else {
      setStatus({
        info: { error: true, msg },
      });
    }
  };
  const handleOnChange = (e: {
    persist: () => void;
    target: { id: any; value: any };
  }) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mqkgqned',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Container
      marginBottom="3rem"
      paddingX="3rem"
      display="flex"
      flexDirection="column"
    >
      <form onSubmit={handleOnSubmit}>
        <FormControl isRequired marginBottom="1rem">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            onChange={handleOnChange}
            isRequired
            value={inputs.name}
            placeholder="Name"
          />
        </FormControl>
        <FormControl isRequired marginBottom="1rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            isRequired
            value={inputs.email}
            placeholder="Email"
          />
        </FormControl>
        <FormControl isRequired marginBottom="1rem">
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            isRequired
            value={inputs.message}
            placeholder="Message"
          />
        </FormControl>
        <FormControl marginBottom="1rem">
          <Button
            width="100%"
            type="submit"
            isDisabled={status.submitting}
            color="white"
            background="primaryBlue"
            _hover={{ opacity: '0.9' }}
            _active={{ opacity: '0.9' }}
          >
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </Button>
        </FormControl>
      </form>
      {status.info.error && (
        <Text alignSelf="center" color="red.500">
          Error: {status.info.msg}
        </Text>
      )}
      {!status.info.error && status.info.msg && (
        <Text alignSelf="center">{status.info.msg}</Text>
      )}
    </Container>
  );
}
