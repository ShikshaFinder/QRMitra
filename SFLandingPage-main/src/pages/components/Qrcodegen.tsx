// QRCodeViewer.js
import { Image } from "@chakra-ui/react";

const QRCodeGenerator = ({ data }) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    data
  )}`;

  return <Image src={qrCodeUrl} alt="QR Code" />;
};

export default QRCodeGenerator;
