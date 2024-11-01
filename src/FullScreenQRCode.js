import { Box, Button, Center } from '@chakra-ui/react'
import { QRCodeCanvas } from 'qrcode.react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function FullScreenQRCode({ onClose }) {
  const navigate = useNavigate();

  return (
    <Center 
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="rgba(0, 0, 0, 0.8)"
      zIndex="1000"
      flexDirection="column"
    >
      <Box 
        position="relative" 
        p={4} 
        bg="white"
        borderRadius="lg" 
        border="8px solid #212121"
        boxShadow="xl"
      >
        <QRCodeCanvas
          value="https://kozhydlo.vercel.app/" 
          size={300}
          level="H"
          marginSize={1}
        />
      </Box>
      <Button
        mt={4}
        colorScheme="teal"
        onClick={() => {
          onClose();
          navigate('/');
        }}
      >
        Назад
      </Button>
    </Center>
  );
}

export default FullScreenQRCode;
