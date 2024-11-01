import React, { useEffect, useState } from 'react';
import {
  Box, ButtonGroup, ChakraProvider, Grid, HStack,
  IconButton, Image, List, Skeleton, SkeletonCircle, Text,
  VStack, Tooltip
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGoogle, FaTwitch, FaTelegram } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { AiOutlineQrcode, AiFillCheckCircle, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { theme } from '@chakra-ui/react';
import FullScreenQRCode from './FullScreenQRCode';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showQRCode, setShowQRCode] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');  // шлях до data.json
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          setIsLoading(false);
        } else {
          throw new Error('Помилка при отриманні даних');
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleQRCodeClick = () => setShowQRCode(!showQRCode);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} sx={{ backgroundColor: "#555B6E", backgroundSize: 'cover' }}>
          <Tooltip label="QR-code" aria-label="QR code" placement="left">
            <IconButton
              icon={<AiOutlineQrcode />}
              color="white"
              bg="transparent"
              _hover={{ color: "#FFD6BA" }}
              size="lg"
              position="absolute"
              top="1em"
              right="1em"
              onClick={handleQRCodeClick}
            />
          </Tooltip>

          <VStack marginTop="2em">
            <Link to="/" style={{ textDecoration: 'none' }}>
              {isLoading ? (
                <SkeletonCircle size="6em" />
              ) : (
                <Image
                  src={data?.info.logo}  // додайте шлях до логотипу в JSON
                  alt="Логотип"
                  w="9em"
                  borderRadius="50%"
                  border="3px solid white"
                  boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
                  as={motion.img}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition="linear 0.1s"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              )}
            </Link>

            <HStack as={motion.div} initial={{ x: '-50px' }} animate={{ x: '0px' }} transition="linear 0.1s">
              {isLoading ? (
                <SkeletonText noOfLines={1} width="10em" skeletonHeight="10" />
              ) : (
                <>
                  <Text fontSize={30} fontWeight="bold" color="white">
                    {data?.info.name}
                  </Text>
                  <Text as={AiFillCheckCircle} color="rgba(3, 177, 252)" fontSize={30} marginRight="auto" />
                </>
              )}
            </HStack>

            <ButtonGroup variant="solid" spacing="3" size="lg">
              {isLoading ? (
                <Skeleton width="12" height="12" />
              ) : (
                <>
                  <ChakraLink href={data?.socialLink.telegram} target="_blank">
                    <IconButton bgColor={data?.color.colorButton} color="gray.900" icon={<FaTelegram />} />
                  </ChakraLink>
                  <ChakraLink href={data?.socialLink.instagram} target="_blank">
                    <IconButton bgColor={data?.color.colorButton} color="gray.900" icon={<AiFillInstagram />} />
                  </ChakraLink>
                  <ChakraLink href={data?.socialLink.twitter} target="_blank">
                    <IconButton bgColor={data?.color.colorButton} color="gray.900" icon={<GrTwitter />} />
                  </ChakraLink>
                </>
              )}
            </ButtonGroup>

            <List as={motion.ul}>
              {data?.links.map(link => (
                <a href={link.url} key={link.text}>
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="12px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    bgColor={data?.color.colorButton}
                    p="1em"
                    marginY="1em"
                    color="gray.900"
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Text as={FaGoogle} fontSize={30} marginRight="auto" /> {/* Підставте відповідну іконку */}
                    <Text fontSize={20} fontWeight="bold" marginRight="auto">
                      {link.text}
                    </Text>
                  </HStack>
                </a>
              ))}
            </List>

            {showQRCode && <FullScreenQRCode onClose={() => setShowQRCode(false)} />}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
