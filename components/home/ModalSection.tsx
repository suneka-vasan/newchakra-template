import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Flex, Container
} from '@chakra-ui/react'

export default function ModalSection() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW="container.xl">
            <Flex alignItems={'center'} justifyContent='center' mb='10'>
                <Button onClick={onOpen} colorScheme='teal'>Modal</Button>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )
}