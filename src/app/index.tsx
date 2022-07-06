import React from "react";
import {Stack, Box} from "@chakra-ui/react";

import {Navbar} from "../navbar/Navbar";
import {Slider} from "../slider/Slider";
import {PaymentMethod} from "../payment/PaymentMethod";
import {ListGroup} from "../listGroup/ListGroup";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack spacing={0}>
      <Navbar />
      <Slider />
      <PaymentMethod />
      <ListGroup />
      <Box>
        <Routes />
      </Box>
    </Stack>
  );
};

export default App;
