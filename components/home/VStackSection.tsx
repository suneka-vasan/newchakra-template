import { VStack, Container, Heading, Center } from '@chakra-ui/react'

export default function VStackSection() {
    return (
        <Container maxW="container.xl">
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                VStack
            </Heading>
            <VStack
                spacing={4}
                align='stretch'
                mb='10'
            >
                <Center h='40px' bg='purple.50'>1</Center>
                <Center h='40px' bg='purple.50'>2</Center>
                <Center h='40px' bg='purple.50'>3</Center>
            </VStack>
        </Container>
    )
}