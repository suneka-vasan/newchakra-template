import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, Button, Flex, Container, Heading
} from '@chakra-ui/react'

export default function PopoverSection() {
    return (
        <Container maxW="container.xl">
            <Popover isLazy>
                <PopoverTrigger>
                    <Flex alignItems={'center'} justifyContent='center' mb='10'>
                        <Button colorScheme='teal'>Popover</Button>
                    </Flex>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Container>
    )
}