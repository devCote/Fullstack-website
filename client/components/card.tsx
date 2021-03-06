import { GridItem, Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

type user = {
  user: {
    firstName: string,
    lastName: string,
    image: string,
    text: string
  }
}

const Card = ({ user }: user) => {

  console.log(user.image)

  return (
    <GridItem w='300px' h='250px' bg='whiteAlpha.200' display='flex' flexDir='column' p={6}>
      <Flex>
        <Image borderColor={"whiteAlpha.800"}
          objectFit="cover"
          borderWidth={2} borderStyle='solid'
          width='50px' height='50px'
          display="inline-block" borderRadius='full'
          alt={user.image} mr={4} src={user.image}
        />
        <Heading color='white' alignSelf='center' as='h2' fontSize={20}>
          {user.firstName + '.' + user.lastName}
        </Heading>
      </Flex>

      <Text color='whiteAlpha.700' mt={4}>{user.text}</Text>
    </GridItem>
  )
}

export default Card
