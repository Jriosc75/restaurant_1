import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import CartItems from './tabs/CartItems'
import CartProcess from './tabs/CartProcess'
import CardConfirmation from './tabs/CardConfirmation'
import CardHistorial from './tabs/CardHistorial'

const titles = [
    { id: 0, title: 'Carrito' },
    { id: 1, title: 'En proceso' },
    { id: 2, title: 'Confirmados' },
    { id: 3, title: 'Recibidos' },
]

export default function CrudCart() {
    const { palette } = useTheme()
    const [type, setType] = useState(0)

    return (
        <Box mt={4}>
            <Box>
                <Typography variant="h1" textAlign={'center'}>
                    Tus pedidos
                </Typography>
            </Box>

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={2}
                mb={2}
                mt={2}
                borderBottom={`1px solid ${palette.primary.contrastText} `}
                sx={{ cursor: 'pointer' }}
            >
                {titles.map((item) => (
                    <Typography
                        key={item.id}
                        variant="body2"
                        onClick={() => setType(item.id)}
                        py={0.5}
                        sx={{
                            width: '170px',
                            textAlign: 'center',
                            color: type === item.id ? palette.primary.main : '#9D9D9D',
                            fontWeight: type === item.id ? 500 : 400,
                            borderBottom: `2px solid ${type === item.id ? palette.primary.main : 'transparent'}`,
                        }}
                    >
                        {item.title}
                    </Typography>
                ))}
            </Box>
            {type === 0 && (
                <>
                    <CartItems />
                </>
            )}
            {type === 1 && (
                <>
                    <CartProcess />
                </>
            )}
            {type === 2 && (
                <>
                    <CardConfirmation />
                </>
            )}

            {type === 3 && <CardHistorial />}
        </Box>
    )
}
