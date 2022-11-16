import { Grid, GridItem, Text, Container, Heading } from '@chakra-ui/react'
import girlImg from '../../public/girlonphone.jpg'
import Image from 'next/image'

export default function GridSection() {
    return (
        <Container maxW="container.xl">
            <Heading textAlign={"center"} fontSize={{ base: "2xl", md: "3xl" }} color={"teal.500"} mb='5'>
                Grid
            </Heading>
            <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mb={10}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato' style={{
                    backgroundImage: 'url(/banner.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} />
                <GridItem colSpan={2} bg='papayawhip' style={{
                    backgroundImage: 'url(/girlonphone.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} />
                <GridItem colSpan={2} bg='papayawhip' style={{
                    backgroundImage: 'url(/man.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} />
                <GridItem colSpan={4} bg='purple.50' ><Text textAlign={"center"} p={10}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>
                </GridItem>
            </Grid>
        </Container>
    )
}
