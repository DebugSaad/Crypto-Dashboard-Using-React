import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import React from "react";

const SupportCard = ({ leftComponent, icon, title, text}) => {
  return (
    <Flex
      gap={6}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="380px">
        <Icon as={icon} boxSize="34px" color="p.purple" />
        <Text as="h1" fontWeight="medium" textStyle="h1">
            {title}
        </Text>
        <Text fontSize="sm" color="black.60">
         {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
      {
        leftComponent
      }  
      </Box>
    </Flex>
  );
};

export default SupportCard;
