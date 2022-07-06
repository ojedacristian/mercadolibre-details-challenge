import * as React from "react";
import {Box, Image} from "@chakra-ui/react";

export const Slider = () => {
  return (
    <Box background="gray.200" display="flex" justifyContent="center" margin={0}>
      <Image
        height="340px"
        margin={0}
        objectFit="cover"
        src="https://http2.mlstatic.com/D_NQ_917752-MLA50446386694_062022-OO.webp"
      />
    </Box>
  );
};
