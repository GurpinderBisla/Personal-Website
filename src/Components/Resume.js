import {
  Box,
  Center,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';

const Resume = () => {
  return (
    <VStack>
      <Center pg={3}>
        <Heading justifyContent="center">Resume</Heading>
      </Center>

      <Container>
        <Heading letterSpacing="tighter">Summary</Heading>
        <UnorderedList>
          <ListItem>Communication skills</ListItem>
          <ListItem>Customer Service SKills</ListItem>
          <ListItem>Positive Attitude</ListItem>
          <ListItem>Organizational skills</ListItem>
          <ListItem>Flexible</ListItem>
        </UnorderedList>
        <br />

        <Heading letterSpacing="tighter">Education</Heading>
        <UnorderedList>
          <ListItem> Capilano University North Vancouver : 2015-2017</ListItem>
          <ListItem> Langara College North vancouver : 2020-present</ListItem>
        </UnorderedList>
        <br />

        <Heading>Programming Languages</Heading>
        <UnorderedList>
          <ListItem>Typescript</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>Python</ListItem>
          <ListItem>C++</ListItem>
        </UnorderedList>
        <br />
      </Container>
    </VStack>
  );
};

export default Resume;
