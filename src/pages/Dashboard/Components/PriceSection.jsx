import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import React from "react";

const PriceSection = () => {
  const timeSpans = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDirection={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text fontSize="24px" fontWeight="medium">
                Rs.280777.33
              </Text>{" "}
              <HStack fontWeight="medium" color="green.300">
                <Icon as={GoArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  0.4 %
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded" >
        <Flex justify="end">
          <TabList  bg="black.5" p="3px">
            {
                ["1H","1D","1W","1M"].map((tab) => (
                    <Tab _selected={{bg:"white", color:"black"}} key="tab" fontSize="xsm" p="6px" borderRadius="4">
                        {tab}
                    </Tab>
                ))
            }
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/graph.svg" mt="50px" />
            <HStack justify="space-between">
              {timeSpans.map((timeSpans) => (
                <Text key={timeSpans} fontSize="sm" color="black.80">
                  {timeSpans}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
