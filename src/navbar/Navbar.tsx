import { Box, Container } from '@chakra-ui/react';
import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <Box
            backgroundColor='yellow.200'
        >
            <Container
                maxWidth='4xl'
                display='flex'
                justifyContent='space-between'
            >
                <div>Logo</div>
                <div>Search</div>
                <div>Promo</div>
            </Container>
        </Box>
    )
}
