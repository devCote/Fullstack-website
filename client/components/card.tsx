import { GridItem, Flex, Avatar, Heading, Text } from "@chakra-ui/react";
import { Faker } from "./faker"

const Card: React.FC = () => (
  <GridItem w='300px' h='250px' bg='whiteAlpha.200' display='flex' flexDir='column' p={6}>
    <Flex>
      <Avatar mr={4} src={Faker.getAvatar()} />
      <Heading color='white' alignSelf='center'
        as='h2' fontSize={20}>{Faker.getFirstName() + '.' + Faker.getLastName()}</Heading>
    </Flex>
    <Text color='whiteAlpha.700' mt={4}>{Faker.getText()}</Text>
  </GridItem>
)

export default Card
