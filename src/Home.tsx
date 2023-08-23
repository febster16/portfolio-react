import { Box, Flex, Heading, Link, Spacer, useColorMode, Button, Avatar, Container, Image, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, Circle, HStack, Tooltip } from "@chakra-ui/react"
import avatar from './assets/favicon.png'
import photoshoot from './assets/MyPhoto.png'
import photoshootLandscape from './assets/myPhotoLandscape.png'
import gramediaIcon from './assets/Gramedia.png'
import verihubsIcon from './assets/Verihubs.png'
import bnccIcon from './assets/BNCC.png'
import { MoonIcon, SunIcon, HamburgerIcon, EmailIcon, DownloadIcon } from '@chakra-ui/icons';
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { colors, menuItems } from "./const/Constants";


export default function Home(): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrolled = window.scrollY > 100;
        setIsScrolled(scrolled);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Box>
                <Flex
                    as="header"
                    position="fixed"
                    zIndex="100"
                    w="100%"
                    bg={isScrolled ? "gray.900" : "transparent"}
                    _light={{ bg: isScrolled ? "gray.50" : "transparent" }}
                    opacity="0.9"
                    backdropFilter="auto"
                    backdropBlur="md"
                    paddingX={{ base: "8", md: "16", lg: "24" }}
                    paddingY="4"
                    align="center"
                    transition="background-color 400ms ease-in-out">
                    <Box>
                        <Avatar name='Febryan Stefanus Tandian' src={avatar} size="sm" />
                    </Box>

                    <Box>
                        <Heading
                            size="md"
                            paddingX="2"
                            as={Link}
                            href="/"
                            _hover={{ textDecoration: "None", opacity: 0.8, transition: "400ms" }}>
                            Febryanstefanus
                        </Heading>
                    </Box>

                    <Spacer />

                    {/* Show Normal Menu Navigation */}
                    <Box display={{ base: 'none', md: 'initial' }} >
                        <Heading
                            key='About'
                            paddingX="4"
                            size="sm"
                            as={Link}
                            href="#about"
                            _hover={{ textDecoration: "none", color: colors.primaryColor, transition: "400ms" }}
                            fontWeight={500}>
                            About
                        </Heading>
                        <Heading
                            key='Experience'
                            paddingX="4"
                            size="sm"
                            as={Link}
                            href="#experience"
                            _hover={{ textDecoration: "none", color: colors.primaryColor, transition: "400ms" }}
                            fontWeight={500}>
                            Experience
                        </Heading>
                        <Heading
                            key='Contact'
                            paddingX="4"
                            size="sm"
                            as={Link}
                            href="mailto:febryan.stefanus16@gmail.com"
                            _hover={{ textDecoration: "none", color: colors.primaryColor, transition: "400ms" }}
                            fontWeight={500}>
                            Contact
                        </Heading>
                    </Box>

                    {/* Show Toggle Button Menu Navigation Dropdown */}
                    <Menu>
                        <MenuButton
                            display={{ base: 'flex', md: 'none' }}
                            size="sm"
                            as={IconButton}
                            aria-label='Menu Navigation'
                            icon={<HamburgerIcon w={4} h={4} />}
                            variant='ghost'
                            _expanded={{ bg: colors.primaryColor, color: "black" }} />
                        <MenuList boxShadow="md" borderStyle="none" borderRadius="4">
                            {menuItems.map((item) => (
                                <MenuItem>
                                    <Heading
                                        key={item}
                                        paddingX="4"
                                        size="sm"
                                        as={Link}
                                        _hover={{ textDecoration: "none", color: colors.primaryColor, transition: "400ms" }}
                                        fontWeight={500}>
                                        {item}
                                    </Heading>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>

                    <Box marginX="4">
                        <Button
                            size="sm"
                            onClick={toggleColorMode}
                            variant={'ghost'} >
                            {colorMode === 'light' ? <MoonIcon w={4} h={4} /> : <SunIcon w={4} h={4} />}
                        </Button>
                    </Box>
                </Flex>
            </Box>


            {/* Content */}
            <Container paddingTop="40" maxW="80%" id="about">
                <Box
                    zIndex="-1"
                    position="absolute"
                    top="140"
                    left="120"
                    display={{ base: "none", lg: "block" }}>
                    <Circle
                        size='120px'
                        bg='teal.800'
                        _light={{ bg: colors.primaryColor }}
                        opacity="0.8">
                    </Circle>
                </Box>

                <Flex flexDir={{ base: "column", lg: "row" }} alignItems="center">
                    <Box display={{ base: "flex", lg: "none" }}>
                        <Image
                            src={photoshootLandscape}
                            boxSize="100%"
                            objectFit='contain'
                            paddingBottom="32px"
                            alt='Febryan Stefanus Tandian' />
                    </Box>

                    <Box flex="1" mr={{ base: "0", lg: "8" }}>
                        <Heading
                            size="lg"
                            color={colors.primaryColor}
                            _light={{ color: colors.secondaryColor }} >
                            Hi, I'm Febryan Stefanus Tandian
                        </Heading>

                        <Heading
                            size="2xl"
                            paddingTop="2">Jr. Backend Engineer <Link
                                _hover={{ opacity: "0.6", transition: "600ms" }}
                                textDecoration={"underline"}
                                isExternal
                                textUnderlineOffset={8}
                                href="https://id.linkedin.com/company/verihubs">@Verihubs</Link>
                        </Heading>

                        <Text
                            paddingY="8"
                            fontWeight="normal"
                            lineHeight="2"
                            letterSpacing="0.2px" >
                            Hi there👋! I'm a fresh graduate with a passion in software engineering. Having experience as a backend engineer in a startup, I have gained valuable experience that fueled my love for developing innovative solutions and tackling challenges head-on. I'm an enthusiastic learner, always eager to expand my skills and knowledge. I thrive in collaborative environments and believe that great ideas come to life through teamwork.
                        </Text>

                        <HStack spacing="24px">
                            <Button
                                leftIcon={<EmailIcon w={6} h={6} />}
                                backgroundColor={colors.primaryColor}
                                colorScheme="blackAlpha"
                                variant="solid"
                                _hover={{ opacity: "0.6", transition: "600ms" }}
                                _light={{ backgroundColor: colors.secondaryColor }}
                                height="14"
                                borderRadius="4"
                                as={Link}
                                href="mailto:febryan.stefanus16@gmail.com"
                                isExternal>
                                <Text fontWeight="bold">
                                    Get in Touch
                                </Text>
                            </Button>

                            <Tooltip label='LinkedIn Profile' fontSize='md' placement="top">
                                <Button
                                    size="md"
                                    variant={'unstyled'}
                                    _hover={{ opacity: "0.6", transition: "400ms" }}
                                    display={"inline-flex"}
                                    alignItems={"center"}
                                    as={Link}
                                    href="https://www.linkedin.com/in/febryan-tandian/"
                                    isExternal>
                                    <FaLinkedin size="32" color="lightGray" />
                                </Button>
                            </Tooltip>

                            <Tooltip label='Public Projects' fontSize='md' placement="top">
                                <Button
                                    size="md"
                                    variant={'unstyled'}
                                    _hover={{ opacity: "0.6", transition: "400ms" }}
                                    display={"inline-flex"}
                                    alignItems={"center"}
                                    as={Link}
                                    href="https://github.com/febster16"
                                    isExternal>
                                    <FaGithub size="32" color="lightGray" />
                                </Button>
                            </Tooltip>
                        </HStack>

                        <Button
                            leftIcon={<DownloadIcon w={4} h={4} />}
                            paddingX="0"
                            paddingY="8"
                            variant="ghost"
                            _hover={{ opacity: "0.6", transition: "400ms" }}
                            as={Link}
                            href="https://drive.google.com/file/d/1iO4JyFZMfWXrQP7GZ5sbJjHs8N187iFC/view?usp=sharing"
                            isExternal>
                            <Text fontWeight="light" fontSize="smaller">
                                Download Resume
                            </Text>
                        </Button>
                    </Box>

                    <Box display={{ base: "none", lg: "flex" }}>
                        <Image
                            src={photoshoot}
                            boxSize={{ base: "100%", md: "500px" }}
                            pl="24px"
                            objectFit='contain'
                            alt='Febryan Stefanus Tandian' />
                    </Box>
                </Flex>
            </Container >


            {/* Work Experience */}
            < Container paddingTop="40" maxW="80%" id="experience">
                <Heading
                    size="lg"
                    alignItems="baseline" >
                    Work Experience
                </Heading>

                <Flex alignContent={"space-around"} justifyContent={"space-around"} paddingTop={"60px"} flexDir={{ base: 'column', lg: 'row' }}>
                    <Box display={"flex"} flexDir={"column"} textAlign={"center"} alignItems={"center"}>
                        <Image
                            borderRadius='full'
                            boxSize='100px'
                            objectFit={"cover"}
                            backgroundColor={"white"}
                            _light={{ backgroundColor: "gray.100" }}
                            src={verihubsIcon}
                            alt='Verihubs'
                        />
                        <Flex flexDir={'column'} paddingY={"24px"}>
                            <Heading
                                size="md"
                                fontWeight={"normal"}
                                letterSpacing="0.4px" >
                                PT Verihubs Inteligensia Nusantara
                            </Heading>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                fontStyle={"italic"}>
                                Junior Backend Engineer
                            </Text>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                opacity={"0.6"}>
                                February 2023 - Present
                            </Text>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                fontStyle={"italic"}>
                                Software Engineer Intern
                            </Text>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                opacity={"0.6"}>
                                February 2022 - February 2023
                            </Text>
                        </Flex>
                    </Box>

                    <Box display={"flex"} flexDir={"column"} textAlign={"center"} alignItems={"center"}>
                        <Image
                            borderRadius='full'
                            boxSize='100px'
                            objectFit={"cover"}
                            padding={2}
                            backgroundColor={"white"}
                            _light={{ backgroundColor: "gray.100" }}
                            src={gramediaIcon}
                            alt='Gramedia'
                        />
                        <Flex flexDir={'column'} paddingY={"24px"}>
                            <Heading
                                size="md"
                                fontWeight={"normal"}
                                letterSpacing="0.4px" >
                                Gramedia Digital Nusantara
                            </Heading>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                fontStyle={"italic"}>
                                UI/UX Designer Intern
                            </Text>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                opacity={"0.6"}>
                                September 2021 - February 2022
                            </Text>
                        </Flex>
                    </Box>

                    <Box display={"flex"} flexDir={"column"} textAlign={"center"} alignItems={"center"}>
                        <Image
                            borderRadius='full'
                            boxSize='100px'
                            objectFit={"cover"}
                            padding={2}
                            backgroundColor={"white"}
                            _light={{ backgroundColor: "gray.100" }}
                            src={bnccIcon}
                            alt='BNCC'
                        />
                        <Flex flexDir={'column'} paddingY={"24px"}>
                            <Heading
                                size="md"
                                fontWeight={"normal"}
                                letterSpacing="0.4px" >
                                Bina Nusantara Computer Club
                            </Heading>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                fontStyle={"italic"}>
                                UI/UX Design Instructor
                            </Text>
                            <Text
                                fontWeight="normal"
                                letterSpacing="0.2px"
                                opacity={"0.6"}>
                                October 2020 - April 2021
                            </Text>
                        </Flex>
                    </Box>
                </Flex>

            </ Container >

            <Box
                marginTop="40"
                backgroundColor={"gray.900"}
                opacity={0.9}
                _light={{ backgroundColor: "gray.50" }}>
                <Container paddingY={"40px"} maxW="80%">
                    <Heading
                        size="lg"
                        alignItems="baseline" >
                        Get in Touch
                    </Heading>
                    <Text
                        fontWeight="normal"
                        letterSpacing="0.2px"
                        opacity={"0.8"}>
                        Feel free to reach me at <Link
                            _hover={{ opacity: "0.6", transition: "600ms" }}
                            textDecoration={"underline"}
                            isExternal
                            textUnderlineOffset={2}
                            href="mailto:febryan.stefanus16@gmail.com">febryan.stefanus16@gmail.com
                        </Link>
                    </Text>
                </Container >

            </Box>
        </>
    )
}