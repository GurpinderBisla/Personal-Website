import { Box, HStack, Spacer } from '@chakra-ui/layout';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';

const Header = () => {
  return (
    <Box>
      <HStack
        display="flex"
        p="3"
        borderBottom="1px"
        borderBottomColor="gray.100"
      >
        <Heading letterSpacing="tighter"> Gurpinder Bisla</Heading>

        <Spacer />
        <Button variant="ghost" bgSize>
          <Text fontWeight="bold">Github</Text>
        </Button>
        <ColorModeSwitcher />
      </HStack>
    </Box>
  );
};

export default Header;
