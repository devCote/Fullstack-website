import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: () => ({
    body: {
      bg: 'black',
      m: 0,
      p: 0
    }
  })
}

const theme = extendTheme({ styles })
export default theme
