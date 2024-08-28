import { CiCircleInfo } from "react-icons/ci";
import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
const PortfolioSection = () => {
  return (
    <div>
      <HStack
        justify="space-between"
        bg="white"
        borderRadius="xl"
        p="24px"
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
        spacing={{
          base: 4,
          xl: 0,
        }}
      >
        <HStack
          spacing={{
            base: 0,
            xl: 16,
          }}
          align={{
            base: "flex-start",
            xl: "center",
          }}
          flexDirection={{
            base: "column",
            xl: "row",
          }}
        >
          <Stack>
            <HStack color="black.80">
              <Text fontSize="sm">Total Portfolio Value</Text>
              <Icon as={CiCircleInfo} />
            </HStack>
            <Text fontSize="24px" fontWeight="medium">
              Rs.566,322,182
            </Text>
          </Stack>

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
                <Tag colorScheme="gray">BTC</Tag>
              </HStack>
              <HStack>
                <Text fontSize="24px" fontWeight="medium">
                  Rs.28777.33
                </Text>{" "}
                <Tag colorScheme="gray">PKR</Tag>
              </HStack>
            </HStack>
          </Stack>
        </HStack>

        <HStack>
          <Button leftIcon={<Icon as={GiPayMoney} />}>Depostion</Button>
          <Button leftIcon={<Icon as={GiReceiveMoney} />}>Withdrawl</Button>
        </HStack>
      </HStack>
    </div>
  );
};

export default PortfolioSection;
