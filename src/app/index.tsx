import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import {Navbar} from "../navbar/Navbar";

const App: React.FC = () => {
  return (
      <Stack>
        <Navbar/>
        <Box>
          <Routes />
        </Box>
      </Stack>
  );
};

export default App;
