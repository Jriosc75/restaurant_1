import { Box, Divider, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PrimaryButton from '../../../../components/common/button/PrimaryButton'
export default function CrudCart() {
    return (
        <Box
            py={{ md: 3, sm: 4, xs: 0 }}
            height={{ sm: 'calc(100vh - 160px)', xs: 'calc(100vh - 146px)' }}
        >
            <Box mt={1} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 214px)' }}>
                <Box display={'flex'} my={0.8} alignItems={'center'}>
                    <Typography flex={2} textAlign={'center'} variant="subtitle1">
                        Producto
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        Cantidad
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        Precio
                    </Typography>
                    <Box flex={1} display={'flex'} justifyContent={'center'}>
                        <Typography flex={1} textAlign={'center'} variant="subtitle1">
                            Ver
                        </Typography>
                    </Box>
                </Box>

                <Box display={'flex'} my={2} alignItems={'center'}>
                    <Typography
                        flex={2}
                        textAlign={'center'}
                        fontSize={24}
                        fontWeight={500}
                        variant="subtitle1"
                        color="white"
                    >
                        La chalaca
                    </Typography>
                    <Typography
                        fontSize={18}
                        fontWeight={500}
                        flex={1}
                        textAlign={'center'}
                        variant="subtitle1"
                        color="white"
                    >
                        2
                    </Typography>
                    <Typography
                        fontSize={18}
                        fontWeight={500}
                        flex={1}
                        textAlign={'center'}
                        variant="subtitle1"
                        color="white"
                    >
                        S/ 12.22
                    </Typography>
                    <Box flex={1} display={'flex'} gap={1} justifyContent={'center'}>
                        <IconButton sx={{ p: 0 }}>
                            <EditIcon sx={{ color: '#BDBDBD' }} fontSize="small" />
                        </IconButton>
                        <IconButton sx={{ p: 0 }}>
                            <DeleteIcon sx={{ color: '#BDBDBD' }} fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                <Divider />
                <Box display={'flex'} my={2} alignItems={'center'}>
                    <Typography
                        flex={2}
                        textAlign={'center'}
                        fontSize={24}
                        fontWeight={500}
                        variant="subtitle1"
                        color="white"
                    >
                        La chalaca
                    </Typography>
                    <Typography
                        fontSize={18}
                        fontWeight={500}
                        flex={1}
                        textAlign={'center'}
                        variant="subtitle1"
                        color="white"
                    >
                        2
                    </Typography>
                    <Typography
                        fontSize={18}
                        fontWeight={500}
                        flex={1}
                        textAlign={'center'}
                        variant="subtitle1"
                        color="white"
                    >
                        S/ 12.22
                    </Typography>
                    <Box flex={1} display={'flex'} gap={1} justifyContent={'center'}>
                        <IconButton sx={{ p: 0 }}>
                            <EditIcon sx={{ color: '#BDBDBD' }} fontSize="small" />
                        </IconButton>
                        <IconButton sx={{ p: 0 }}>
                            <DeleteIcon sx={{ color: '#BDBDBD' }} fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                <Divider />
            </Box>
            <Box
                sx={{
                    borderTopLeftRadius: 32,
                    background: '#1D1D1D',
                    width: { md: '50%', sm: '60%', xs: '90%' },
                    height: { md: 70, sm: 60, xs: 65 },
                }}
                position="absolute"
                display={'flex'}
                bottom={0}
                right={0}
            >
                <Box
                    width={'130px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{ background: '#518BE1', borderTopLeftRadius: 32 }}
                >
                    <Typography variant="h2" sx={{ mt: 0.5 }}>
                        Total: S/. 405
                    </Typography>
                </Box>
                <Box width={'70%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <PrimaryButton text="Confirmar compra" onClick={() => console.log('11')} />
                </Box>
            </Box>
        </Box>
    )
}
