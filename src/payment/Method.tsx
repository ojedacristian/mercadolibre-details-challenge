import {Box, Icon, Text} from "@chakra-ui/react";
import React from "react";

interface MethodProps {
  icon: () => JSX.Element;
  title: string;
  sub: string;
}

export const Method = ({icon, title, sub}: MethodProps) => {
  return (
    <Box alignItems="center" display="flex" minWidth="250px" padding="1em">
      <Icon as={icon} />
      <Box paddingLeft="1em">
        <Text fontSize="lg">{title}</Text>
        <Text as="span" color="blue.400" fontSize="sm">
          {sub}
        </Text>
      </Box>
    </Box>
  );
};
