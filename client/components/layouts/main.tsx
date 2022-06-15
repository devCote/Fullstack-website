import { Container, Box, Image } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from '../navbar'

const Main = ({ children }: any) => {

  return (
    <Box as='main'>
      <Head>
        <meta name="description" content="night city life" />
        <meta name="keywords" content="crawlers, night city, night" />
        <meta name="author" content="Dmitriy Bakhanenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="lang" content="en" />
      </Head>
      <Navbar />
      <Image
        src="/back.jpg"
        alt="background img"
        position='absolute'
        objectFit='cover'
        zIndex={-1}
        width='100%'
        height='90vh'
        filter='auto'
        brightness='50%'
        blur='3px'
      />
      <Container maxW='container.md'>
        {children}
      </Container>
    </Box>
  )
}

export default Main
