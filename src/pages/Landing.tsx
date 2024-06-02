import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter'
import Burger from '../../public/img/burguer.png'
import Alitas from '../../public/img/alitas.png'
import Shawarma from '../../public/img/shawarma.png'
export default function Landing() {
    const navigate = useNavigate()
    const { palette } = useTheme()
    const [text] = useTypewriter({
        words: ['Hamburguesas', 'Alitas Broster', 'Salchipapas', 'Shawarmas'],
        loop: false,
        delaySpeed: 3000,
    })

    return (
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
                <Typography variant="body1" fontWeight={500} sx={{ color: 'white', fontSize: 15 }}>
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
                            <Typography variant="body1" mt={2}>
                                Mejoramos la eficiencia, aumentamos tus ventas y brindamos una
                                experiencia excepcional a tus clientes
                            </Typography>
                            <Button
                                variant="contained"
                                color="warning"
                                sx={{ width: '130px', py: 1, mt: 6 }}
                                onClick={() => navigate('/131231/menu')}
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
                    sx={{ justifyContent: { md: 'start', xs: 'center' } }}
                    alignItems={'center'}
                    gap={1}
                >
                    <Typography variant="subtitle1">By Jorick</Typography>
                    <Box
                        height={15}
                        width={2}
                        sx={{ background: palette.primary.contrastText }}
                    ></Box>
                    <Typography
                        variant="subtitle1"
                        sx={{ ':hover': { cursor: 'pointer', color: 'white' } }}
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
                        sx={{ ':hover': { cursor: 'pointer', color: 'white' } }}
                    >
                        Terminos y condiciones
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
