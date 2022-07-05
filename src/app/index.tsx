import React from "react";
import {Stack, Box} from "@chakra-ui/react";

import {Navbar} from "../navbar/Navbar";
import {Slider} from "../slider/Slider";
import {PaymentMethod} from "../payment/PaymentMethod";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack spacing={0}>
      <Navbar />
      <Slider />
      <PaymentMethod />
      <Box>
        <Routes />
      </Box>
    </Stack>
  );
};

export default App;
