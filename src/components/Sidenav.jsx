import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom'
const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleNeSw,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack h="auto" justify='space-between' boxShadow={{base:"none" , lg:"lg"}} w={{base:"full", lg:"250px"}}
    display={{
      base: 'none',
      md: 'flex',
      sm: 'flex',
      xsm: 'flex'
    }}
    bg="white"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="50px" w="260px">
          @saad_x._.x
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
            <HStack
              py="3"
              px="4"
              borderRadius="10px"
              transition="0.2s"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt={{base:"32rem",md:"45rem"}} mx="3" mb="4">
          <Link to="/support">
          <HStack
          py="3"
          px="4"
          borderRadius="10px"
          transition="0.2s"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={IoIosCall} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
          </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
