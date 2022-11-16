import { Flex, Box, Text, SimpleGrid, Avatar, Circle, Container, Heading } from '@chakra-ui/react'
import { MoonIcon, StarIcon, SunIcon } from '@chakra-ui/icons'

export default function SimpleGridSection() {
    return (
        <Container maxW="container.xl">
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                SimpleGrid, Avatar & Icons
            </Heading>
            <SimpleGrid columns={5} spacing={10} mb={10}>
                <Box textAlign={'center'}>
                    <Flex justifyContent={'center'} pb={5}>
                        <Avatar bg='purple.100' name='Dan Abrahmov' src='../../public/women.jpg' size='xl' />
                    </Flex>
                    <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                    <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                </Box>
                <Box textAlign={'center'}>
                    <Flex justifyContent={'center'} pb={5}>
                        <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </Flex>
                    <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                    <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                </Box>
                <Box textAlign={'center'}>
                    <Flex justifyContent={'center'} pb={5}>
                        <Circle size='96px' bg='purple.100'>
                            <MoonIcon fontSize={24} />
                        </Circle>
                    </Flex>
                    <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                    <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                </Box>
                <Box textAlign={'center'}>
                    <Flex justifyContent={'center'} pb={5}>
                        <Circle size='96px' bg='purple.100'>
                            <StarIcon fontSize={24} />
                        </Circle>
                    </Flex>
                    <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                    <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                </Box>
                <Box textAlign={'center'}>
                    <Flex justifyContent={'center'} pb={5}>
                        <Circle size='96px' bg='purple.100'>
                            <SunIcon fontSize={24} />
                        </Circle>
                    </Flex>
                    <Heading as='h4' size='sm' pb='3'>Heading</Heading>
                    <Text lineHeight={1.5}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                </Box>
            </SimpleGrid>
        </Container>
    )
}