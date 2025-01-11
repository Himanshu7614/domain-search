"use client"
import { ChakraProvider } from "@chakra-ui/react";
import Challenge from "@/components/Challenge";

export default function Home() {
  const theme = {
    // ... your system-ui theme
    config: {
      useSystemColorMode: false, // or true
      initialColorMode: "light", // or "dark"
      cssVarPrefix: "chakra", // any string
    }
  }
  return (
    <ChakraProvider theme={theme}>
      <Challenge numDomainsRequired={0} />
    </ChakraProvider>
  );
}
