import {Box, Container, Image, Input, HStack, Text} from "@chakra-ui/react";
import React from "react";

import Logo from "../assets/logo.png";

export const Navbar: React.FC = () => {
  return (
    <Box backgroundColor="yellow.200">
      <Container
        alignItems="center"
        display="flex"
        height="100px"
        justifyContent="space-between"
        maxWidth="container.xl"
        paddingY="0.5em"
      >
        <Box>
          <Image paddingBottom="1em" src={Logo} />
          <Box>
            <Text fontSize="xs">Enviar a</Text>
            <Box>Capital Federal</Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          fontSize="sm"
          h="full"
          justifyContent="space-between"
          minWidth="50%"
        >
          <Box display="flex">
            <Input bg="white" placeholder="Buscar productos, marcas y más..." />
          </Box>
          <HStack spacing="1em">
            <Box>Categorías</Box>
            <Box>Ofertas</Box>
            <Box>Historial</Box>
            <Box>Supermercado</Box>
            <Box>Moda</Box>
            <Box>Vender</Box>
            <Box>Ayuda</Box>
          </HStack>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          fontSize="sm"
          h="full"
          justifyContent="space-between"
        >
          <Text fontSize="md">Envíos gratis en 24 hs a partir de $4.000</Text>
          <Box display="flex" justifyContent="space-between">
            <Text>Creá tu cuenta</Text>
            <Text>Ingresá</Text>
            <Text>Mis compras</Text>
            <span> 🛒 </span>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
