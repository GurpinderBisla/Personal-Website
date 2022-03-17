import { Img } from '@chakra-ui/image';
import { Flex, Heading, VStack, HStack, Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';

const About = () => {
  return (
    <Flex justifyContent="space-around" bg="gray.200" mg={3} minHeight="35vh">
      <Box>
        <VStack>
          <Heading> About Me </Heading>
          <Text>
            Current student at Langara College with a passion for computer
            science
          </Text>
        </VStack>
      </Box>

      <Box>
        <Img src="/ImgMe.png" boxSize="35vh" />
      </Box>
    </Flex>
  );
};

export default About;
