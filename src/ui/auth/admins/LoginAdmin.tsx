import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { PrimaryInput } from '../../../components/common/input/PrimaryInput'
import { PrimaryPasswordInput } from '../../../components/common/input/PrimaryPasswordInput'
import Google from '../../../../public/img/google.png'
import Facebook from '../../../../public/img/fb.png'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'
interface Props {
    onCancel: () => void
    onSwitch: () => void
    onSwitchPassword: () => void
}

export default function LoginAdmin({ onCancel, onSwitch, onSwitchPassword }: Props) {
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
                Por favor inicie sesion
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box
                    sx={{
                        width: '48%',
                        background: palette.primary.contrastText,
                        py: 1.5,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        borderRadius: 3,
                    }}
                >
                    {' '}
                    <img src={Facebook} height={20} width={20} style={{ borderRadius: 10 }} />
                    <Typography variant="body2">con Facebook</Typography>
                </Box>
                <Box
                    sx={{
                        width: '48%',
                        background: palette.primary.contrastText,
                        py: 1.5,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        borderRadius: 3,
                    }}
                >
                    {' '}
                    <img src={Google} height={20} width={20} style={{ borderRadius: 10 }} />
                    <Typography variant="body2">con Google</Typography>
                </Box>
            </Box>

            <Typography variant="body2" mb={1} mt={4}>
                Con correo electronico
            </Typography>

            <PrimaryInput placeholder="Correo Electronico" />
            <PrimaryPasswordInput placeholder="Contraseña" style={{ marginTop: '24px' }} />
            <Typography
                variant="body2"
                sx={{ cursor: 'pointer', width: 'fit-content' }}
                onClick={onSwitchPassword}
                mt={6}
            >
                ¿Olvidaste tu contraseña?
            </Typography>
            <Box display={'flex'} mt={6} justifyContent={'center'}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ color: palette.primary.main, px: 6 }}
                    onClick={() => navigate('/auth/admin/:1212313')}
                >
                    Iniciar sesion
                </Button>
            </Box>
            <Typography variant="body2" mt={6}>
                ¿No tienes una cuenta?, registrate{' '}
                <span
                    style={{
                        marginLeft: '2px',
                        fontWeight: 600,
                        color: palette.primary.main,
                        cursor: 'pointer',
                    }}
                    onClick={onSwitch}
                >
                    aqui
                </span>
            </Typography>
        </Box>
    )
}
