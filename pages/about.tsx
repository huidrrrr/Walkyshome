import {
  ChakraProvider,
  useColorMode,
  VStack,
  Button,
  Box,
  Text,
  extendTheme,
} from "@chakra-ui/react";
import { Providers } from "@/app/providers";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "purple.200",
        _dark: "red.200",
      },
      card: {
        default: "purple.900",
        _dark: "red.900",
      },
    },
    shadows: {
      card: {
        default: "lg",
        _dark: "none",
      },
    },
    radii: {
      card: {
        default: "sm",
        _dark: "lg",
      },
    },
  },
});

function About() {
  const { toggleColorMode } = useColorMode();

  return (
    <VStack spacing={6} p={10}>
      <Button onClick={toggleColorMode}>Change Theme</Button>
      <Box p={4} shadow="card" rounded={"card"} bg={"card"}>
        <Text color={"text"}>This is a test.</Text>
      </Box>
    </VStack>
  );
}

export default function AboutPage() {
  return (
    <ChakraProvider theme={theme}>
      <About />
    </ChakraProvider>
  );
}
