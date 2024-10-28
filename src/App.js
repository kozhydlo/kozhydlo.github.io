import {
  Box,
  ButtonGroup,
  Link as ChakraLink,
  ChakraProvider,
  Grid,
  HStack,
  IconButton,
  Image,
  List,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaGoogle, FaTwitch } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { Link } from 'react-router-dom'

import {
  AiFillCheckCircle,
  AiFillGithub,
  AiFillInstagram
} from 'react-icons/ai'

import {
  FaGlobe,
  FaTelegram
} from 'react-icons/fa'


function App() {
  const links = [
    {
      url: 'https://github.com/kozhydlo',
      icon: AiFillGithub,
      text: 'GitHub',
    },
    {
      url: 'https://www.twitch.tv/kozhydlomark',
      icon: FaTwitch,
      text: 'Twitch',
    },
    {
      url: 'https://kozhydlomark-portfolio.vercel.app/',
      icon: FaGoogle,
      text: 'Portfolio',
    },
  ];

  const devlinks = [
    {
      url: 'https://github.com/kozhydlo/ECO-BLOG',
      icon: AiFillGithub,
      text: 'ECO-BLOG',
    },
    {
      url: 'https://book-app-eosin-alpha.vercel.app/',
      icon: AiFillGithub,
      text: 'Book App',
    },
    {
      url: 'https://friends-website-dusky.vercel.app/',
      icon: AiFillGithub,
      text: 'Friends-website',
    },
    {
      url: 'https://github.com/kozhydlo/crypto-app',
      icon: AiFillGithub,
      text: 'Crypto App',
    },
  ];

  const info = {
    name: '@Kozhydlo',
  };

  const color = {
    colorTheme: 'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)',
    colorButton: 'rgba(255,255,255)',
  };

  const socialLink = {
    telegram: 'https://t.me/Kozhydlom',
    instagram: 'https://www.instagram.com/kozhydlomark/',
    twitter: 'https://x.com/kozhydlo',
  };

  const parentContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const chieldElement = {
    hidden: { opacity: 0, x: '-50px' },
    show: { opacity: 1, x: '0px' },
  };

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/');
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } else {
        throw new Error('Помилка при полученні даних');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          minH="100vh"
          p={3}
          sx={{
            backgroundColor: "#555B6E",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundBlendMode: 'soft-light',
          }}
        >
          <VStack marginTop="2em">
            <Link to="/" style={{ textDecoration: 'none' }}>
              {isLoading ? (
                <SkeletonCircle size="6em" />
              ) : (
                <Image
                  src="./Logo.jpg"
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

            <HStack
              as={motion.div}
              initial={{ x: '-50px' }}
              animate={{ x: '0px' }}
              transition="linear 0.1s"
            >
              {isLoading ? (
                <>
                  <SkeletonText
                    noOfLines={1}
                    width="10em"
                    skeletonHeight="10"
                  />
                  <Skeleton height="30px" width="30px" borderRadius="50%" />
                </>
              ) : (
                <>
                  <Text fontSize={30} fontWeight="bold" color="white">
                    {info.name}
                  </Text>
                  <Text
                    as={AiFillCheckCircle}
                    color="rgba(3, 177, 252)"
                    fontSize={30}
                    marginRight="auto"
                  />
                </>
              )}
            </HStack>

            <ButtonGroup variant="solid" spacing="3" size="lg">
              {isLoading ? (
                <>
                  <Skeleton width="12" height="12" />
                  <Skeleton width="12" height="12" />
                  <Skeleton width="12" height="12" />
                  <Skeleton width="12" height="12" />
                </>
              ) : (
                <>
                  <ChakraLink href={socialLink.telegram} target="_blank">
                    <IconButton
                      bgColor={color.colorButton}
                      color="gray.900"
                      icon={<FaTelegram />}
                      as={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      _hover={{
                        boxShadow: '3px 3px 3px 0px #FFD6BA',
                        
                      }}
                    />
                  </ChakraLink>
                  <ChakraLink href={socialLink.instagram} target="_blank">
                    <IconButton
                      bgColor={color.colorButton}
                      color="gray.900"
                      icon={<AiFillInstagram />}
                      as={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      _hover={{
                        boxShadow: '3px 3px 3px 0px #FFD6BA',
                        
                      }}
                    />
                  </ChakraLink>
                  <ChakraLink href={socialLink.twitter} target="_blank">
                    <IconButton
                      bgColor={color.colorButton}
                      color="gray.900"
                      icon={<GrTwitter />}
                      as={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      _hover={{
                        boxShadow: '3px 3px 3px 0px #FFD6BA',
                        
                      }}
                    />
                  </ChakraLink>
                </>
              )}
            </ButtonGroup>

            <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              {links.map(link => (
                <a href={link.url}>
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="12px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    bgColor={color.colorButton}
                    p="1em"
                    marginY="1em"
                    color="gray.900"
                    as={motion.div}
                    variants={chieldElement}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    _hover={{
                      boxShadow: '12px 14px 14px 0px #FFD6BA',
                      
                    }}
                  >
                    <Text as={link.icon} fontSize={30} marginRight="auto" />
                    <Text
                      fontSize={20}
                      fontWeight="bold"
                      marginRight="auto"
                      p="1em"
                      marginY="1em"
                    >
                      {link.text}
                    </Text>
                  </HStack>
                </a>
              ))}
            </List>

            <List
              as={motion.ul}
              variants={parentContainer}
              initial="hidden"
              animate="show"
            >
              {devlinks.map(link => (
                <a href={link.url}>
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="12px"
                    boxShadow="10px 5px 5px rgba(0,0,0,0.5)"
                    color="gray.900"
                    bgColor={color.colorButton}
                    p="1em"
                    marginY="1em"
                    _hover={{
                      boxShadow: '12px 14px 14px 0px #FFD6BA',
                      
                    }}
                    as={motion.div}
                    variants={chieldElement}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Text as={link.icon} fontSize={30} marginRight="auto" />
                    <Text
                      fontSize={20}
                      fontWeight="bold"
                      marginRight="auto"
                      p="1em"
                      marginY="1em"
                    >
                      {link.text}
                    </Text>
                  </HStack>
                </a>
              ))}
            </List>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
