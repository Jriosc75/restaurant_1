import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
export default function CrudOrders() {
    const { palette } = useTheme()
    return (
        <Box>
            <Box
                sx={{
                    borderBottom: `1px solid ${palette.secondary.main}`,
                    mt: 2,
                    pb: 1,
                }}
            >
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="subtitle1">Local: Nombre del restaurante</Typography>
                    <Typography textAlign={'end'} variant="subtitle1">
                        12/02/24 - 16:40
                    </Typography>
                </Box>
                <Box border={`1px solid ${palette.primary.contrastText}`} borderRadius={1} mt={1}>
                    <Box display={'flex'} my={0.8} alignItems={'center'}>
                        <Typography flex={2} textAlign={'center'} variant="subtitle2">
                            Nombre
                        </Typography>
                        <Typography flex={1} textAlign={'center'} variant="subtitle2">
                            Cantidad
                        </Typography>
                        <Typography flex={1} textAlign={'center'} variant="subtitle2">
                            Subtotal{' '}
                        </Typography>
                        <Box flex={1} display={'flex'} justifyContent={'center'}>
                            <Typography flex={1} textAlign={'center'} variant="subtitle2">
                                Ver
                            </Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display={'flex'} my={1} alignItems={'center'}>
                        <Typography flex={2} textAlign={'center'} variant="subtitle1">
                            La chalaca
                        </Typography>
                        <Typography flex={1} textAlign={'center'} variant="subtitle1">
                            2
                        </Typography>
                        <Typography flex={1} textAlign={'center'} variant="subtitle1">
                            S/. 12.22
                        </Typography>
                        <Box flex={1} display={'flex'} justifyContent={'center'}>
                            <IconButton sx={{ p: 0 }}>
                                <VisibilityIcon sx={{ color: '#BDBDBD' }} fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display={'flex'} my={1} alignItems={'center'}>
                        <Typography flex={2} textAlign={'center'} variant="subtitle1">
                            La chalaca1212121
                        </Typography>
                        <Typography flex={1} textAlign={'center'} variant="subtitle1">
                            2
                        </Typography>
                        <Typography flex={1} textAlign={'center'} variant="subtitle1">
                            S/. 12.22
                        </Typography>
                        <Box flex={1} display={'flex'} justifyContent={'center'}>
                            <IconButton sx={{ p: 0 }}>
                                <VisibilityIcon sx={{ color: '#BDBDBD' }} fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Box mt={1} display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="subtitle1">Total: S/. 20</Typography>
                    <Typography variant="subtitle1">Tiempo estimado: 15min</Typography>
                </Box>
            </Box>
        </Box>
    )
}
