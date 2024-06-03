import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'

interface Props {
    onCancel: () => void
    onSwitch: () => void
}

export default function PasswordAdmin({ onCancel, onSwitch }: Props) {
    const { palette } = useTheme()
    const navigate = useNavigate()
    return (
        <Box position={'relative'}>
            <IconButton
                onClick={onCancel}
                sx={{ position: 'absolute', top: -45, right: 0, zIndex: 10 }}
            >
                <CloseIcon color="error" />
            </IconButton>
            <Typography variant="body2" mb={1}>
                Para temas de contraseña por favor comuniquese con nostros via whatsapp, haciendo
                click en el siguiente boton
            </Typography>

            <Box display={'flex'} mt={4} justifyContent={'center'}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ color: palette.primary.main, px: 6 }}
                    onClick={() => navigate('/auth/home/:id')}
                >
                    Solicitar cambio
                </Button>
            </Box>
            <Typography variant="body2" mt={6}>
                Tengo una cuenta, quiero
                <span
                    style={{
                        marginLeft: '6px',
                        fontWeight: 600,
                        color: palette.primary.main,
                        cursor: 'pointer',
                    }}
                    onClick={onSwitch}
                >
                    iniciar sesion
                </span>
            </Typography>
        </Box>
    )
}
