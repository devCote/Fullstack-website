import { GridItem, Flex, Avatar, Heading, Text } from "@chakra-ui/react";

type user = {
  user: {
    firstName: string,
    lastName: string,
    image: string,
    text: string
  }
}

const Card = ({ user }: user) => (
  <GridItem w='300px' h='250px' bg='whiteAlpha.200' display='flex' flexDir='column' p={6}>
    <Flex>
      <Avatar mr={4} src={user.image} />
      <Heading color='white' alignSelf='center' as='h2' fontSize={20}>
        {user.firstName + '.' + user.lastName}
      </Heading>
    </Flex>
    <Text color='whiteAlpha.700' mt={4}>{user.text}</Text>
  </GridItem>
)

export default Card
