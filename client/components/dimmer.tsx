import { Box } from "@chakra-ui/react";

const Dimmer = ({ value }: any) => (
  <Box width='100vw' height={4} background={value}></Box>
)

export default Dimmer
