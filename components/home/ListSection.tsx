import {
    List, ListItem, ListIcon, OrderedList, UnorderedList, Flex, Container, Heading
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function ListSection() {
    return (
        <Container maxW="container.xl">
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                List
            </Heading>
            <Flex alignItems={'center'} justifyContent='center' mb='10'>
                <UnorderedList mr='10' spacing={3}>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                <OrderedList mr='10' spacing={3}>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </OrderedList>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </List>
            </Flex>
        </Container>
    )
}