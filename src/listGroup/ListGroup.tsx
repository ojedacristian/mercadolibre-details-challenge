import {Box, Image, Text, Container, AspectRatio} from "@chakra-ui/react";
import React from "react";

export const ListGroup = () => {
  return (
    <Box alignItems="center" backgroundColor="gray.200" display="flex" flexDirection="column">
      <List title="Basado en tu última visita" />
      <List title="Relacionado con tus visitas en Electrodomésticos y Aires" />
      <List title="Ofertas" />
    </Box>
  );
};

interface ListProps {
  title: string;
}
export const List = ({title}: ListProps) => {
  return (
    <Container margin="1em 0" minWidth={"container.xl"}>
      <Text fontSize="2xl" fontWeight={"light"}>
        {title}
      </Text>
      <Box as="ul" display="flex" justifyContent="space-between" listStyleType="none">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Box>
    </Container>
  );
};

export const ListItem = () => {
  return (
    <Box as="li" backgroundColor="white" borderRadius="10px" shadow="md">
      <Box borderBottom="1px" borderColor="gray.100" paddingBottom="0.5em">
        <AspectRatio minWidth={"220px"} ratio={1}>
          <Image src="https://http2.mlstatic.com/D_Q_NP_887914-MLA41537458952_042020-AB.webp" />
        </AspectRatio>
      </Box>
      <Box padding="0.5em">
        <Box alignItems="center" display="flex">
          <Text fontSize="xl" paddingRight="1em">
            $45.999
          </Text>
          <Text as="span" color="green.300" fontSize={"sm"}>
            54% OFF
          </Text>
        </Box>
        <Text color="green.300" fontSize="sm">
          12x $ 3.833 sin interés
        </Text>
        <Text color="green.400" fontSize="md" fontWeight="medium">
          Envío gratis
        </Text>
      </Box>
    </Box>
  );
};
