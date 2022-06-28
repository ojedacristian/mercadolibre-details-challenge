import { Box, Container, Image, Input, HStack, Text } from '@chakra-ui/react';
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
                alignItems='center'
            >
                <Box>
                    <Image src={Logo} paddingBottom='1em' />
                    <Box>Capital Federal</Box>
                </Box>
                <Box fontSize='sm'>
                    <Box paddingBottom='0.5em'>
                        <Input placeholder='Buscar productos, marcas y más...' size='md' maxWidth='400px' bg='white' marginX='2em' />
                    </Box>
                    <HStack spacing='1em'>
                        <Box>Categorías</Box>
                        <Box>Ofertas</Box>
                        <Box>Historial</Box>
                        <Box>Supermercado</Box>
                        <Box>Moda</Box>
                        <Box>Vender</Box>
                        <Box>Ayuda</Box>
                    </HStack>
                </Box>
                <Box fontSize='sm'
                >
                    <Text paddingBottom={'1em'}>Envíos gratis en 24 hs a partir de $4.000</Text>
                    <Text>Mi Cuenta</Text>
                </Box>
            </Container>
        </Box>
    )
}
