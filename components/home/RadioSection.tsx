import React from 'react'
import { Container, Stack, Heading, Radio, RadioGroup } from '@chakra-ui/react'

export default function RadioSection() {
    const [value, setValue] = React.useState('1')
    return (
        <Container maxW="container.xl" mb='10'>
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                Radio
            </Heading>
            <RadioGroup onChange={setValue} value={value} >
                <Stack direction='row' justifyContent='center'>
                    <Radio colorScheme='teal' value='1'>First</Radio>
                    <Radio colorScheme='teal' value='2'>Second</Radio>
                    <Radio colorScheme='teal' value='3'>Third</Radio>
                </Stack>
            </RadioGroup>
        </Container>
    )
}