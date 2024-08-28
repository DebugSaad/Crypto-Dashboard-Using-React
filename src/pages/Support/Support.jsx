import DashboardLayout from "../../components/DashboardLayout"
import ContactCard from "./ContactCard"
import SupportCard from "./SupportCard"
import { IoIosMail } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import InfoCard from '../Dashboard/Components/InfoCard'
import { Stack } from "@chakra-ui/react";
const Support = () => {
  return (

      <DashboardLayout title="Support">
        <Stack spacing="80px">
        <SupportCard leftComponent={<ContactCard/>} title="Contact Us" text="Have a question or just want to know more ? Feel free to reach out to
          us." icon={IoIosMail}/>
        <SupportCard title="Live Chat" leftComponent={<InfoCard 
        inverted={true} 
        tagText="Chatbox"
        text="Chat with us"
        imgUrl=""
        
        />} 
          text="Don't have time to wait for the answer? Chat with us now.
          us." icon={FaFacebookMessenger}/>
        </Stack>
      </DashboardLayout>
  )
}

export default Support
