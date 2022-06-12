import { GridItem, Flex, Avatar, Heading, Text } from "@chakra-ui/react";

type Client = {
  data: {
    avatar: string,
    firstName: string,
    lastName: string,
    text: string
  }
}

const Card = ({ data: { avatar, firstName, lastName, text } }: Client) => (
  <GridItem w='300px' h='250px' bg='whiteAlpha.200' display='flex' flexDir='column' p={6}>
    <Flex>
      <Avatar mr={4} src={avatar} />
      <Heading color='white' alignSelf='center'
        as='h2' fontSize={20}>{firstName + '.' + lastName}</Heading>
    </Flex>
    <Text color='whiteAlpha.700' mt={4}>{text}</Text>
  </GridItem>
)

export default Card
