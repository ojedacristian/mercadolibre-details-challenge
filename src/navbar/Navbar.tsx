import { Box, Container, Image } from '@chakra-ui/react';
import React from 'react'
import Logo from '../assets/logo.png'

export const Navbar: React.FC = () => {
    return (
        <Box
            backgroundColor='yellow.200'
        >
            <Container
                maxWidth='4xl'
                display='flex'
                justifyContent='space-between'
                padding='2em'
            >
                <Image src={Logo} />
                <div>Search</div>
                <div>Promo</div>
            </Container>
        </Box>
    )
}
