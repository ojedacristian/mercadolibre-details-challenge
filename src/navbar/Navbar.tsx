import { Box, Container, Image, Input, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import Logo from '../assets/logo.png'

export const Navbar: React.FC = () => {
    return (
        <Box
            backgroundColor='yellow.200'
        >
            <Container
                maxWidth='container.xl'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                paddingY='0.5em'
            >
                <Box>
                    <Image src={Logo} paddingBottom='1em' />
                    <Box>
                        <Text fontSize='xs'>Enviar a</Text>
                        <Box>Capital Federal</Box>
                    </Box>
                </Box>
                <Box fontSize='sm'
                    minWidth='50%'
                >
                    <Box paddingBottom='2.5em'
                        display='flex'
                    >
                        <Input 
                        placeholder='Buscar productos, marcas y más...' bg='white' />
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
                    <Text paddingBottom={'1em'} fontSize='md'>Envíos gratis en 24 hs a partir de $4.000</Text>
                    <Box
                        display='flex'
                    >
                        <Text>Creá tu cuenta</Text>
                        <Text>Ingresá</Text>
                        <Text>Mis compras</Text>
                        <span> :+1: </span>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
