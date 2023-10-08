import Image from "next/image";
import styles from "./page.module.css";
import { Flex, Spacer, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex direction={"column"} background={"gray.100"} p={12} rounded={6}>
        <Heading mb={1}>Welcome</Heading>
      </Flex>
    </Flex>
  );
}
