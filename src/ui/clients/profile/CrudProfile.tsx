import { Box, Button, Divider, Grid, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import CrudOrders from './orders/CrudOrders'
import CrudHistory from './history/CrudHistory.tsx'
import { PrimaryInput } from '../../../components/common/input/PrimaryInput.tsx'

const titles = [
    { id: 0, title: 'En camino' },
    { id: 2, title: 'Por confirmar' },
    { id: 1, title: 'Historial' },
]
export default function CrudProfile() {
    const { palette } = useTheme()
    const [type, setType] = useState(0)
    return (
        <Box py={{ md: 3, sm: 4, xs: 0 }}>
            <Typography variant="h2">Datos del consumidor</Typography>
            <Grid container mt={0} spacing={2}>
                <Grid item md={3} xs={6}>
                    <PrimaryInput label={'Nombres'} placeholder="Nombre completo" />
                </Grid>
                <Grid item md={3} xs={6}>
                    <PrimaryInput label={'Telefono'} placeholder="987654321" />
                </Grid>
                <Grid item md={3} xs={6}>
                    <PrimaryInput label={'Distrito'} placeholder="Distrito" size="small" />
                </Grid>
                <Grid item md={3} xs={6}>
                    <PrimaryInput label={'Direccion'} placeholder="Direccion" size="small" />
                </Grid>
                <Grid item md={3} xs={6}>
                    <PrimaryInput label={'Referencia'} placeholder="Referencia" />
                </Grid>
                <Grid item md={6} xs={6}>
                    <PrimaryInput
                        label={'Ubicacion google maps'}
                        placeholder="Enlace"
                        size="small"
                    />
                </Grid>
            </Grid>
            <Button variant="contained" color="warning" sx={{ mt: 3 }}>
                Editar informacion
            </Button>
            <Typography mt={{ md: 8, sm: 6, xs: 4 }} mb={2} variant="h2">
                Pedidos
            </Typography>
            <Box display={'flex'} gap={2}>
                {titles.map((item) => (
                    <Typography
                        key={item.id}
                        variant="subtitle1"
                        onClick={() => setType(item.id)}
                        py={0.5}
                        sx={{
                            cursor: 'pointer',
                            textAlign: 'center',
                            opacity: type === item.id ? 1 : 0.8,
                            fontWeight: 400,
                            color: type === item.id ? 'white' : palette.background.default,
                            lineHeight: '14px',
                            borderBottom: `1px solid ${type === item.id ? 'white' : 'transparent'}`,
                        }}
                    >
                        {item.title}
                    </Typography>
                ))}
            </Box>
            <Divider sx={{ mb: 1 }} />
            {type === 0 && <CrudOrders />}
            {type === 1 && <CrudHistory />}
        </Box>
    )
}
