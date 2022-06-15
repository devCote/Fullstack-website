import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box zIndex={1} as='nav' background='blackAlpha.500' width='100%' position='fixed' display='flex' justifyContent='center' css={{ backdropFilter: 'blur(20px)' }} >
      <Box maxW='container.md' display='flex' p={4} justifyContent='space-between'>
        <Box width='900px'>
          <Text color="white" fontSize='2xl' fontWeight='bold'>
            City Life
          </Text>
        </Box>
        <Flex mt={1}>
          <Button variant='link' onClick={
            () => {
              const a = document.getElementsByTagName('input')
              window.scrollTo(0, document.body.scrollHeight)
              a[0].focus()
            }} mr={4} color="whiteAlpha.500" fontSize='xl' fontWeight='bold'>
            add yourself
          </Button>
        </Flex>
      </Box>

    </Box >
  )
}

export default Navbar
