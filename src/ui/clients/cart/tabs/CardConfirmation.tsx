import { Box, Divider, Grid, Typography, useTheme } from '@mui/material'
import useBoxShadow from '../../../../hooks/common/useBoxShadow'

export default function CardConfirmation() {
    const { palette } = useTheme()
    return (
        <Box sx={{ background: palette.primary.contrastText, py: 3, px: 4, borderRadius: 3 }}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h4">Pedidos</Typography>
                </Grid>
                <Grid item md={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">Cantidad</Typography>
                </Grid>

                <Grid item md={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">Monto</Typography>
                </Grid>

                <Grid item md={6} mt={3}>
                    <Typography variant="h3">Titulo 1</Typography>
                    <Typography variant="body1">Cremas: Mayonesa, Aji, Tartara...</Typography>
                    <Typography variant="body1">Adicionales: Papas, Queso</Typography>
                </Grid>
                <Grid item md={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h3">1</Typography>
                </Grid>

                <Grid item md={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h3">S/ 12</Typography>
                </Grid>
                <Grid item md={12} sx={{ py: 1 }}>
                    <Divider />
                </Grid>
                <Grid item md={5} mt={1}>
                    <Typography variant="h4">Pago: Yape</Typography>
                </Grid>
                <Grid item md={4} mt={1}>
                    <Typography variant="h4">Entrega: Delivery</Typography>
                </Grid>

                <Grid
                    item
                    md={3}
                    mt={0.5}
                    display={'flex'}
                    alignItems={'center'}
                    sx={{ position: 'relative' }}
                    justifyContent={'center'}
                >
                    <Typography variant="h2" fontWeight={500}>
                        Total: <span style={{ marginLeft: '8px' }}> S/ 121.00</span>
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={10}
                        sx={{ position: 'absolute', bottom: -12 }}
                    >
                        No incluye delivery
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Box
                        sx={{
                            background: palette.success.main,
                            py: 2,
                            px: 3,
                            mt: 4,
                            borderRadius: 3,
                            boxShadow: useBoxShadow(true),
                        }}
                        display={'flex'}
                        justifyContent={'space-between'}
                    >
                        <Typography variant="body2" color={'white'} textAlign={'center'}>
                            Pedido confirmado
                        </Typography>
                        <Typography variant="body2" color={'white'} textAlign={'center'}>
                            Fecha: 12/07/24 12:23pm
                        </Typography>

                        <Typography variant="body2" color={'white'} textAlign={'center'}>
                            Tiempo de espera: 20min
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
