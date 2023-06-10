import React, { useEffect, useRef } from "react";
import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const Deshboard = () => {
  const chartRef = useRef(null);
  useEffect(() => {}, []);

  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Box>
          <FormControl>
            <FormLabel>Load Amount</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Annual Interest Rate (%)</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Tensure (in Months)</FormLabel>
            <Input />
          </FormControl>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};
