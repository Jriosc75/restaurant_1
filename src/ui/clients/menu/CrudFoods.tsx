import { Box, Typography, keyframes } from '@mui/material'

import food from '../../../../public/img/foto2.jpg'
import arrow from '../../../../public/img/Arrow.png'
import PrimaryButton from '../../../components/common/button/PrimaryButton'

import { useState } from 'react'
import PrimaryDialog from '../../../components/common/modal/PrimaryDialog'
import FormBurger from './form/FormBurger'
const fadeInLeft = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0.6;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export default function CrudFoods() {
    const [open, setOpen] = useState(false)
    const onCancel = () => {
        setOpen(false)
    }
    return (
        <Box py={{ md: 3, sm: 4, xs: 0 }}>
            <Box maxWidth={1100} mx={'auto'}>
                <Box
                    display={'flex'}
                    minHeight={{ sm: 'calc(100vh - 160px)', xs: 'calc(100vh - 186px)' }}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    border={'1px solid red'}
                >
                    <Box mb={3}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography variant="subtitle2" fontSize={{ md: 16, sx: 13 }}>
                                Hamburguesas
                            </Typography>
                            <Box display={{ md: 'flex', sm: 'none', xs: 'none' }} gap={4}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        opacity: 0.5,
                                        ':hover': {
                                            opacity: 1,
                                            cursor: 'pointer',
                                            borderBottom: '1px solid white',
                                        },
                                    }}
                                >
                                    Atrás
                                </Typography>
                                <Typography
                                    sx={{
                                        opacity: 0.5,
                                        ':hover': {
                                            opacity: 1,
                                            cursor: 'pointer',
                                            borderBottom: '1px solid white',
                                        },
                                    }}
                                    variant="subtitle2"
                                >
                                    Siguiente
                                </Typography>
                            </Box>
                        </Box>

                        <Typography variant="h1" mt={{ md: 0, sm: 0, xs: 2 }} maxWidth={570}>
                            LA AMERICANA1
                        </Typography>
                        <Typography variant="subtitle1" mt={{ md: 2, xs: 1 }} maxWidth={570}>
                            ingredientes, ingredientes,ingredientes, ingredienes ingrege, indesdes,
                            ingrediens, ingreger, inigreger inigerge, inigr ege213123...
                        </Typography>
                        <Typography sx={{ fontSize: 24, my: 3, color: 'white', fontWeight: 600 }}>
                            Pecio: S/ 12.00
                        </Typography>
                        <PrimaryButton onClick={() => setOpen(true)} text="Agregar al carrito" />
                    </Box>

                    <Box
                        display={{ md: 'none', sm: 'none', xs: 'flex' }}
                        justifyContent={'end'}
                        gap={4}
                        mb={3}
                    >
                        <Typography
                            variant="subtitle2"
                            fontSize={14}
                            sx={{
                                opacity: 0.5,
                                ':hover': {
                                    opacity: 1,
                                    cursor: 'pointer',
                                    borderBottom: '1px solid white',
                                },
                            }}
                        >
                            Atrás
                        </Typography>
                        <Typography
                            sx={{
                                opacity: 0.5,

                                ':hover': {
                                    opacity: 1,
                                    cursor: 'pointer',
                                    borderBottom: '1px solid white',
                                },
                            }}
                            variant="subtitle2"
                        >
                            Siguiente
                        </Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box
                            width={'120px'}
                            display={'flex'}
                            alignItems={'center'}
                            sx={{
                                opacity: 0.5,
                                ':hover': {
                                    opacity: 1,
                                    cursor: 'pointer',
                                },
                                ':hover .shawarmaText': {
                                    animation: `${fadeInLeft} 0.5s ease forwards`,
                                    display: 'block',
                                },
                            }}
                        >
                            <img src={arrow} height={50} width={10} />
                            <Typography
                                className="shawarmaText"
                                variant="subtitle1"
                                ml={1}
                                sx={{
                                    display: 'none',
                                    transform: 'rotate(180deg)',
                                }}
                            >
                                Shawarmas
                            </Typography>
                        </Box>
                        <img src={food} height={'450px'} width={'450px'} className="img-food-1-2" />
                    </Box>
                </Box>
            </Box>

            <PrimaryDialog open={open}>
                <FormBurger onCancel={onCancel} />
            </PrimaryDialog>

            <Box
                sx={{
                    background:
                        'linear-gradient(to right top, #646464, #696868, #4c4b4c, #313131, #181818)',
                    height: '60%',
                    width: '45%',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    borderTopLeftRadius: '100px',
                    '@media (max-width: 1090px)': {
                        height: '50%',
                        width: '50%',
                        borderTopLeftRadius: '50px',
                    },
                    '@media (max-width: 650px)': {
                        height: '35%',
                        width: '60%',
                        borderTopLeftRadius: '50px',
                        display: 'none',
                    },
                }}
            ></Box>

            <img src={food} height={'450px'} width={'450px'} className="img-food-1" />
        </Box>
    )
}
