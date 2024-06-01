import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    Typography,
    useTheme,
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
const adicionales = [
    { id: 1, name: 'Yape', price: 0.5 },
    { id: 2, name: 'Plin', price: 1.0 },
    { id: 3, name: 'Efectivo', price: 0.3 },
]

export default function CartItems() {
    const { palette } = useTheme()
    return (
        <Box sx={{ background: palette.primary.contrastText, py: 3, px: 4, borderRadius: 3 }}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h4">Pedidos</Typography>
                </Grid>
                <Grid item md={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">Cantidad</Typography>
                </Grid>

                <Grid item md={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">Monto</Typography>
                </Grid>

                <Grid item md={2}></Grid>

                <Grid item md={6} mt={3}>
                    <Typography variant="h3">Titulo 1</Typography>
                    <Typography variant="body1">Cremas: Mayonesa, Aji, Tartara...</Typography>
                    <Typography variant="body1">Adicionales: Papas, Queso</Typography>
                </Grid>
                <Grid item md={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h3">1</Typography>
                </Grid>

                <Grid item md={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h3">S/ 12</Typography>
                </Grid>

                <Grid item md={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Grid>
                <Grid item md={12} sx={{ py: 1 }}>
                    <Divider />
                </Grid>

                <Grid item md={5} mt={2}>
                    <Typography variant="h4">Pago</Typography>
                    <Box mt={1} ml={1}>
                        {adicionales.map((item, index) => (
                            <FormControlLabel
                                key={item.id}
                                control={
                                    <Checkbox
                                        size="small"
                                        icon={
                                            <RadioButtonUncheckedIcon
                                                sx={{ color: '#AAAAAA', opacity: 0.6 }}
                                            />
                                        }
                                        checkedIcon={<RadioButtonCheckedIcon color="warning" />}
                                        sx={{ p: 0.5 }}
                                        name={`${item.id}_${index}`}
                                    />
                                }
                                label={<Typography variant="body2">{item.name}</Typography>}
                            />
                        ))}
                    </Box>
                </Grid>
                <Grid item md={5} mt={2}>
                    <Typography variant="h4">Entrega</Typography>
                    <Box mt={1} ml={1}>
                        {adicionales.map((item, index) => (
                            <FormControlLabel
                                key={item.id}
                                control={
                                    <Checkbox
                                        size="small"
                                        icon={
                                            <RadioButtonUncheckedIcon
                                                sx={{ color: '#AAAAAA', opacity: 0.6 }}
                                            />
                                        }
                                        checkedIcon={<RadioButtonCheckedIcon color="warning" />}
                                        sx={{ p: 0.5 }}
                                        name={`${item.id}_${index}`}
                                    />
                                }
                                label={<Typography variant="body2">{item.name}</Typography>}
                            />
                        ))}
                    </Box>
                </Grid>

                <Grid
                    item
                    md={2}
                    mt={2}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Typography variant="h2" fontWeight={500}>
                        Total: <span style={{ marginLeft: '8px' }}> S/ 121.00</span>
                    </Typography>
                </Grid>
                <Grid item md={12} display={'flex'} justifyContent={'end'} mt={2}>
                    <Button variant="contained" color="warning" sx={{ color: 'white', mr: 0 }}>
                        Confirmar compra
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
