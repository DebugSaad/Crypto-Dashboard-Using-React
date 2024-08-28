import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title,children }) => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <div>
      <Flex>           
         <Box
              display={{
                base: "none",
                lg: "flex",
              }}>
        <Sidenav/>
          </Box>
        <SideDrawer isOpen={isOpen} onClose = {onClose} />
        <Box flexGrow={1}>
          <TopNav title = {title} onOpen={onOpen}/>
          <Container overflowX="hidden" overflowY="auto" mt="6"  maxW='70rem'>{children}</Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
