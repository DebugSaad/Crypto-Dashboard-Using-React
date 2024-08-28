import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, StackDivider, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
    <Stack spacing={6}>
      <Text fontWeight="medium" fontSize="sm">
        You will recieve response within 24 hours of time of submit.
      </Text>

      <HStack
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter Your Name.." />
        </FormControl>
        <FormControl>
          <FormLabel>Surname</FormLabel>
          <Input type="text" placeholder="Enter Your Surname.." />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="name@gmail.com" />
      </FormControl>
      <FormControl>
        <FormLabel>Messege</FormLabel>
        <Textarea placeholder="Your Messege" />
      </FormControl>
      <Checkbox defaultChecked>
        <Text fontSize="xs">
          I agree with
          <Box as="span" color="p.purple">
            {" "}
            Terms & Conditions.
          </Box>
        </Text>
      </Checkbox>
      <Stack>
        <Button fontSize="sm">Send a Messege</Button>
        <Button fontSize="sm" colorScheme="gray">
          Book a Metting
        </Button>
      </Stack>
    </Stack>
  </Card>
  )
}

export default ContactCard
