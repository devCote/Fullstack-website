import { Box, Heading, Button, Text, Grid, Flex, Image, extendTheme } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layouts/main'
import dynamic from 'next/dynamic'

const LazyForm: any = dynamic((): any => import('../components/formik'), {
  ssr: false,
  loading: () => <div>Loading</div>
})

const Cards: any = dynamic((): any => import('../components/cards'), { ssr: false, loading: () => <div>loading</div> })

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Night City Life</title>
        <meta name="description" content="City life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as='section' height='90vh'>
        <Box alignSelf='center' justifySelf='center'>
          <Heading color={'white'} textAlign='center'
            fontSize='8xl' as='h1'>Night City Life</Heading>
          <Text color='whiteAlpha.700' fontSize='2xl'>
            The Free City of Night City (NC) is an autonomous city
            located on the border between North and South California,
            on the Pacific coast of North America. It is considered a
            modern multicultural metropolis of the 21st-century.
          </Text>
          <Flex mt={2} justify='center'>
            <Button width='150px' variant='outline' onClick={
              () => {
                const input = document.getElementsByTagName('input')
                input[0].focus()
                window.scrollTo(0, document.body.scrollHeight)
              }
            } colorScheme='whiteAlpha'>Join Now</Button>
          </Flex>
        </Box>
      </Flex>
      <Grid as='section' height='90vh' display='flex' alignItems='center' justifyContent='center' flexDir='column'>
        <Heading color='white' mb={4} as='h2'>Night City Cravlers</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <Cards />
        </Grid>
      </Grid>
      <Box as='section' height='90vh' display='flex' alignItems='center' justifyContent='center' flexDir='column'>
        <Image src='/night-city-life.jpg' zIndex={-2}
          position='absolute' width='100%' height='90vh'
          objectFit='cover'
          alt='s' filter='auto' blur='3px' brightness='60%' />
        <Image src='/pic1.png' alt='img'
          position='absolute' width={{ base: '1000px', md: '1200px', lg: '80%' }}
          zIndex={-1} left={{ base: '10%', lg: '17%' }} bottom='5rm' />
        <Heading as='h2' fontSize='5xl' color='white'>Be The Latest Crawler</Heading>
        <Flex justify='center'>
          <LazyForm />
        </Flex>
      </Box>
    </Layout >
  )
}

export default Home
