// components/QR.tsx
import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import QRCodeGenerator from "./Qrcodegen";

interface QRProps {
  data: string;
}

const QR = () => {
  const [customWords, setCustomWords] = useState<string>("");
  const [qrCodeData, setQRCodeData] = useState<string>("");

  const handleGenerateQRCode = () => {
    // Combine the input data to create a unique identifier for the QR code
    const generatedQRCodeData = `${customWords}`;
    // Display the QR code image dynamically
    setQRCodeData(generatedQRCodeData);
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Generate QR code</Heading>
          <FormControl id="customWords">
            <FormLabel>Enter name of police station</FormLabel>
            <Input
              type="text"
              onChange={(e) => setCustomWords(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme={"blue"}
            variant={"solid"}
            onClick={handleGenerateQRCode}
          >
            Generate QR code
          </Button>
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* Display the QR code image dynamically */}
        <QRCodeGenerator data={"shikshafinder.com/"+   qrCodeData} />
      </Flex>
    </Stack>
    
  );
};

export default QR;
