import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  ChakraProvider,
  Link,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FcShop } from "react-icons/fc";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      
      align="center"
      justify="space-between"
      padding={4}
      bg="blue.800"
      color="white"
    >
      <Box marginLeft={"6rem"}>
        <IconButton
          icon={<FcShop size={"2.5rem"} />}
          size="xl"
          backgroundColor="blue"
          aria-label="Shopping Logo"
          marginRight={2}
        />
         {/* Home Link */}
         <Link
          href="/"
          marginRight={4}
          style={{ textDecoration: "none" }}
          _hover={{
           color:"red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",}}
        >

          Home
        </Link>

        {/* About Us Link */}
        <Link href="/about" marginRight={4} style={{ textDecoration: "none" }}
          _hover={{
           color:"red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",}}>
          About Us
        </Link>

        {/* Contact Us Link */}
        <Link href="/contact" marginRight={4} style={{ textDecoration: "none" }}
          _hover={{
           color:"red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",}}>
          Contact Us
        </Link>
      </Box>

      <Flex align="center">

        {/* Search Input */}

        <Input
          variant="filled"
          bg="white"
          marginRight={2}
          _placeholder={{ color: "gray" }}
          _hover={{
            border: "1px solid #ccc",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
          placeholder="Search"
        />
        <IconButton
          icon={<FcShop size={"2.5rem"} />}
          size="xl"
          backgroundColor="blue"
          aria-label="Shopping Logo"
          marginRight={"6rem"}
          
        />
        {/* Sign Up Button */}
        <Button colorScheme="teal" variant="outline" marginRight={2}>
          Sign Up
        </Button>

        {/* Login Button */}
        <Button colorScheme="teal" variant="solid">
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
