import { Container } from '@chakra-ui/layout';
import { Heading, Center, Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import { Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const Projects = () => {
  return (
    <Box bg="gray.100">
      <Container>
        <Center>
          <Heading>Personal Projects</Heading>
        </Center>

        <Link href="https://github.com/GurpinderBisla/Chip8">
          <Button size="lg" variant="link">
            Chip 8 Emulator
          </Button>
        </Link>
        <Img src="/chip8.png" />
        <Text>
          A emulator for running CHIP-8 video games, written in C, runs 99% of
          all roms flawlessly
        </Text>
      </Container>
    </Box>
  );
};

export default Projects;
