import { Card, CardHeader, CardBody, CardFooter, Container, Flex, Button, Image, Stack, Heading, Text, useDisclosure, Divider, ButtonGroup, SimpleGrid } from '@chakra-ui/react'

export default function ModalSection() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW="container.xl" mb='10'>
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                Card
            </Heading>
            <SimpleGrid columns={3} spacing={4}>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='/man.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='teal'>Heading</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Text>
                            <Text color='teal.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='teal'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='teal'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='/girlonphone.jpg'
                            borderRadius='lg'
                            alt='Girl On Phone'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='teal'>Heading</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Text>
                            <Text color='teal.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='teal'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='teal'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='/banner.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='teal'>Heading</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Text>
                            <Text color='teal.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='teal'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='teal'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Container>
    )
}