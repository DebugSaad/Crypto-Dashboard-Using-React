import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { IoMdDownload } from "react-icons/io";
import TransactionTable from "./Components/TransactionTable";
import { IoMdSearch } from "react-icons/io";
const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: "349",
    },
    {
      name: "Deposit",
      count: "39",
    },
    {
      name: "Withdraw",
      count: "34",
    },
    {
      name: "Trade",
      count: "49",
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={IoMdDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" justifyContent="space-between">
            <HStack>
            {
            tabs.map((tab) => (
              <Tab key={tab.name} display="flex" gap="2">
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))
            }
            </HStack>

            <InputGroup maxW="300px" pb="2" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={IoMdSearch }/>
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or by Destination" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
