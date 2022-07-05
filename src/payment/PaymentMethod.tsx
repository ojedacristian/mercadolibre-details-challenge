import React from "react";
import {Box, Container} from "@chakra-ui/react";

import {cardIcon} from "../assets/icons/Icons";

import {Method} from "./Method";

export const PaymentMethod = () => {
  return (
    <Box backgroundColor="gray.200" padding="2em 0">
      <Container
        alignItems="center"
        backgroundColor="white"
        display="flex"
        justifyContent="space-between"
        minWidth="container.xl"
        rounded="5px"
      >
        <Method icon={cardIcon} sub="Ver promociones bancarias" title="Tarjeta de crédito" />
        <Method icon={cardIcon} sub="Ver más" title="Tarjeta de débito" />
        <Method icon={cardIcon} sub="Conocé Mercado Crédito" title="Cuotas sin tarjeta" />
        <Method icon={cardIcon} sub="Ver más" title="Efectivo" />
      </Container>
    </Box>
  );
};
