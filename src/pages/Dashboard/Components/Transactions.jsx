import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      Text: "Rs Deposit",
      amount: "+ Rs81,432.21",
      Timespan: "2024-8-12 7:21 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      Text: "BTC Sell",
      amount: "- 1,432.21BTC",
      Timespan: "2024-8-1 6:22 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      Text: "Rs Deposit",
      amount: "+ Rs81,432.21",
      Timespan: "2024-8-12 7:21 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transactions, i) => (
          <Fragment  key={transactions.id} >
            { i !== 0 && <Divider spacing={4}/>}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transactions.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing="0">
                  <Text textStyle="h6">{transactions.Text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transactions.Timespan}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transactions.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt={4}>View all</Button>
    </CustomCard>
  );
};

export default Transactions;
