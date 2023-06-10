import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginData = {
  email: "",
  password: "",
};

export default function Login() {
  const [log, setLog] = useState(loginData);
  const { email, password } = log;
  const navigate = useNavigate();

  const handleChange = (e) => {
    let val = e.target.value;
    setLog({ ...log, [e.target.name]: val });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(log);
    axios
      .post("http://localhost:8080/login", log)
      .then((res) => {
        localStorage.setItem("EMI_data", JSON.stringify(res.data));
        localStorage.setItem("isAuth", JSON.stringify(true));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="email"
                value={email}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="password"
                value={password}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <a href="/register">
                  <Link color={"blue.400"}>Don't have an account?</Link>
                </a>
              </Stack>
              <Button
                onClick={handleClick}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
