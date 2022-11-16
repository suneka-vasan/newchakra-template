import { Wrap, WrapItem, Box, Text, Container, Heading } from '@chakra-ui/react'

export default function WrapSection() {
    return (
        <Container maxW="container.xl">
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                Wrap
            </Heading>
            <Wrap spacing='30px' justify='center' mb='10'>
                <WrapItem>
                    <Box bg='purple.50' width='300px' p='5'>
                        <Text lineHeight='1.6'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box bg='purple.50' width='300px' p='5'>
                        <Text lineHeight='1.6'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box bg='purple.50' width='300px' p='5'>
                        <Text lineHeight='1.6'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box bg='purple.50' width='300px' p='5'>
                        <Text lineHeight='1.6'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box bg='purple.50' width='300px' p='5'>
                        <Text lineHeight='1.6'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>
                    </Box>
                </WrapItem>
            </Wrap>
        </Container>
    )
}