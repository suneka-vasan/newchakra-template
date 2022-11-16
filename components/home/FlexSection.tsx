import { Flex, Box, Text, Spacer, Container, Heading } from '@chakra-ui/react'
import girlImg from '../../public/girlonphone.jpg'
import Image from 'next/image'

export default function FlexSection() {
    return (
        <Container maxW="container.xl">
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                Flex
            </Heading>
            <Flex mb={10}>
                <Box mr={10}>
                    <Flex alignItems={'center'} justifyContent={'center'}>
                        <Image
                            src={girlImg}
                            alt='girl on phone'
                            style={{
                                borderRadius: '15px',
                                width: '250px',
                                height: 'auto',
                                marginBottom: 20
                            }}
                        />
                    </Flex>
                    <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                </Box>
                <Spacer />
                <Box mr={10}>
                    <Flex alignItems={'center'} justifyContent={'center'} >
                        <Image
                            src={girlImg}
                            alt='girl on phone'
                            style={{
                                borderRadius: '15px',
                                width: '250px',
                                height: 'auto',
                                marginBottom: 20
                            }}
                        />
                    </Flex>
                    <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                </Box>
                <Box>
                    <Flex alignItems={'center'} justifyContent={'center'}>
                        <Image
                            src={girlImg}
                            alt='girl on phone'
                            style={{
                                borderRadius: '15px',
                                width: '250px',
                                height: 'auto',
                                marginBottom: 20
                            }}
                        />
                    </Flex>
                    <Text textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                </Box>
            </Flex>
        </Container>
    )
}