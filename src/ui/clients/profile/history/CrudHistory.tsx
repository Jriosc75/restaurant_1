import { Box, Divider, Typography, useTheme } from '@mui/material'

export default function CrudHistory() {
    const { palette } = useTheme()
    return (
        <Box mt={2}>
            <Box border={`1px solid ${palette.primary.contrastText}`} borderRadius={1} mt={1}>
                <Box display={'flex'} my={0.8} alignItems={'center'}>
                    <Typography flex={2} textAlign={'center'} variant="subtitle2">
                        Local
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle2">
                        Fecha
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle2">
                        Pago
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle2">
                        Metodo
                    </Typography>
                </Box>
                <Divider />
                <Box display={'flex'} my={1} alignItems={'center'}>
                    <Typography flex={2} textAlign={'center'} variant="subtitle1">
                        La chalaca
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        12/07/2025 - 11:40
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        S/. 12.22
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        Yape
                    </Typography>
                </Box>
                <Divider />
                <Box display={'flex'} my={1} alignItems={'center'}>
                    <Typography flex={2} textAlign={'center'} variant="subtitle1">
                        La chalaca
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        12/07/2025 - 11:40
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        S/. 12.22
                    </Typography>
                    <Typography flex={1} textAlign={'center'} variant="subtitle1">
                        Yape
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
