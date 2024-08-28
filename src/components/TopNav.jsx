import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaUserAstronaut } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4px" bg="white">
      <HStack maxW="1000px" h="58px" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="26px">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Box>
              <Icon
                fontSize="20px"
                as={FaUserAstronaut}
              />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
