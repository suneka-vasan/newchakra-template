import { Container, Stack, Heading, CheckboxGroup, Checkbox } from '@chakra-ui/react'

export default function CheckBoxSection() {
    return (
        <Container maxW="container.xl" mb='10'>
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                Check Box
            </Heading>
            <CheckboxGroup colorScheme='teal' defaultValue={['first', 'third']} >
                <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent='center'>
                    <Checkbox value='first'>First</Checkbox>
                    <Checkbox value='second'>Second</Checkbox>
                    <Checkbox value='third'>Third</Checkbox>
                </Stack>
            </CheckboxGroup>
        </Container>
    )
}