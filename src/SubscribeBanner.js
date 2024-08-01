import { Box, Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaTelegram } from 'react-icons/fa'

const SubscribeBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Telegram розсилка</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Text fontSize="lg" fontWeight="bold" color="gray.700" mr="4">
                Telegram BOT
              </Text>
              <IconButton
                as="a"
                href="https://t.me/kozhydlobot"
                target="_blank"
                colorScheme="telegram"
                icon={<FaTelegram />}
                borderRadius="full"
                size="lg"
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Закрити
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubscribeBanner;
