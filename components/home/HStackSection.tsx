import { HStack, Container, Heading } from '@chakra-ui/react'
import girlImg from '../../public/girlonphone.jpg'
import Image from 'next/image'

export default function HStackSection() {
    return (
        <Container maxW="container.xl">
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                HStack
            </Heading>
            <HStack spacing={8} mb={10} alignItems='center' justifyContent={'center'}>
                <Image
                    src={girlImg}
                    alt='girl on phone'
                    style={{
                        width: '350px',
                        height: 'auto'
                    }}
                />

                <Image
                    src={girlImg}
                    alt='girl on phone'
                    style={{
                        width: '350px',
                        height: 'auto'
                    }}
                />
                <Image
                    src={girlImg}
                    alt='girl on phone'
                    style={{
                        width: '350px',
                        height: 'auto'
                    }}
                />
            </HStack>
        </Container>
    )
}