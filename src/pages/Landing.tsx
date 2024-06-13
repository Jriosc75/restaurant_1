import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { useTypewriter } from 'react-simple-typewriter'
import Burger from '../../public/img/burguer.png'
import Alitas from '../../public/img/alitas.png'
import Shawarma from '../../public/img/shawarma.png'
import { useState } from 'react'
import LoginAdmin from '../ui/auth/admins/LoginAdmin'
import RegisterAdmin from '../ui/auth/admins/RegisterAdmin'
import PrimaryDialog from '../components/common/modal/PrimaryDialog'
import PasswordAdmin from '../ui/auth/admins/PasswordAdmin'

export default function Landing() {
    const { palette } = useTheme()
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState('login')
    const [text] = useTypewriter({
        words: ['Hamburguesas', 'Alitas Broster', 'Salchipapas', 'Shawarmas'],
        loop: false,
        delaySpeed: 3000,
    })
    const onCancel = () => {
        setOpen(false)
        setStatus('login')
    }

    return (
        <>
            <Box
                minHeight={'100vh'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
            >
                <img
                    src={Burger}
                    className="img-landing-1"
                    width={350}
                    height={300}
                    style={{ opacity: 0.1 }}
                />
                <img
                    src={Alitas}
                    width={240}
                    className="img-landing-2"
                    height={220}
                    style={{ opacity: 0.1 }}
                />
                <img
                    src={Shawarma}
                    className="img-landing-3"
                    width={250}
                    height={130}
                    style={{ opacity: 0.1 }}
                />
                <Box
                    maxWidth={'1200px'}
                    width={'100%'}
                    mx={'auto'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    sx={{ height: '100%', px: 2, py: { md: 0, xs: 3 } }}
                >
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        sx={{ color: 'white', fontSize: 15 }}
                    >
                        Jamex
                    </Typography>

                    <Grid sx={{ height: '100%', my: 2 }} container>
                        <Grid
                            md={6}
                            xs={12}
                            item
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                minHeight={'400px'}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    mb: 6,
                                }}
                            >
                                <Typography variant="h1" fontSize={40} fontWeight={700}>
                                    ¿Vendes {text}?
                                </Typography>
                                <Typography variant="body1" sx={{ maxWidth: '500px' }} mt={2}>
                                    Mejoramos la eficiencia, aumentamos tus ventas y brindamos una
                                    experiencia excepcional a tus clientes
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    sx={{ width: '130px', py: 1, mt: 6 }}
                                    onClick={() => setOpen(true)}
                                >
                                    Empecemos
                                </Button>
                            </Box>
                        </Grid>
                        <Grid md={6} xs={12} item>
                            <Box
                                height={'100%'}
                                minHeight={'500px'}
                                sx={{ borderRadius: 3, background: 'grey', opacity: 0.1 }}
                                width={'100%'}
                            ></Box>
                        </Grid>
                    </Grid>

                    <Box
                        display={'flex'}
                        mt={{ md: 0, xs: 6 }}
                        sx={{ justifyContent: { md: 'start', xs: 'space-between' } }}
                        alignItems={'center'}
                        gap={1}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                '@media (max-width: 680px)': {
                                    fontSize: 12,
                                },
                            }}
                        >
                            By Jorick
                        </Typography>
                        <Box
                            height={15}
                            width={2}
                            sx={{ background: palette.primary.contrastText }}
                        ></Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                '@media (max-width: 680px)': {
                                    fontSize: 12,
                                },
                                ':hover': { cursor: 'pointer', color: 'white' },
                            }}
                        >
                            Prolitcas de privacidad
                        </Typography>
                        <Box
                            height={15}
                            width={2}
                            sx={{ background: palette.primary.contrastText }}
                        ></Box>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                '@media (max-width: 680px)': {
                                    fontSize: 12,
                                },
                                ':hover': { cursor: 'pointer', color: 'white' },
                            }}
                        >
                            Terminos y condiciones
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <PrimaryDialog open={open}>
                {status === 'login' && (
                    <LoginAdmin
                        onCancel={onCancel}
                        onSwitch={() => setStatus('register')}
                        onSwitchPassword={() => setStatus('password')}
                    />
                )}
                {status === 'register' && (
                    <RegisterAdmin onCancel={onCancel} onSwitch={() => setStatus('login')} />
                )}

                {status === 'password' && (
                    <PasswordAdmin onCancel={onCancel} onSwitch={() => setStatus('login')} />
                )}
            </PrimaryDialog>
        </>
    )
}
