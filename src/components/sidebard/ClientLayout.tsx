import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    Typography,
    useTheme,
} from '@mui/material'
import { ReactNode, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../public/img/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

import PrimaryDialog from '../common/modal/PrimaryDialog'
import Login from '../../ui/auth/clients/Login'
import Register from '../../ui/auth/clients/Register'
import FullScreenDialog from '../common/modal/FullScreenDialog'
import CrudCart from '../../ui/clients/profile/cart/CrudCart'
import CrudProfile from '../../ui/clients/profile/CrudProfile'

interface Props {
    children: ReactNode
    search: boolean
}
export default function ClientLayout({ children }: Props) {
    const navigate = useNavigate()
    const { palette } = useTheme()
    const params = useLocation()
    const [open, setOpen] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [status, setStatus] = useState('login')
    const onCancel = () => {
        setOpen(false)
        setStatus('login')
    }

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }
        setDrawerOpen(open)
    }

    const drawerList = () => (
        <Box
            sx={{ width: 170, background: palette.primary.light }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem onClick={() => navigate('/dasdasfasfasd/menu')}>
                    <Typography
                        sx={{
                            color: params.pathname.includes('menu') ? 'white' : 'gray',
                            ':hover': { cursor: 'pointer', color: 'white' },
                            ml: 1,
                            my: 0.2,
                        }}
                        fontWeight={400}
                        fontSize={18}
                    >
                        Menu
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem onClick={() => navigate('/dasdasfasfasd/location')}>
                    <Typography
                        sx={{
                            color: params.pathname.includes('location') ? 'white' : 'gray',
                            ':hover': { cursor: 'pointer', color: 'white' },
                            ml: 1,
                            my: 0.2,
                        }}
                        fontSize={18}
                        fontWeight={400}
                    >
                        Ubicacion
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenProfile(true)}>
                    <Typography
                        sx={{
                            ':hover': { cursor: 'pointer', color: 'white' },
                            ml: 1,
                            my: 0.2,
                            color: 'gray',
                        }}
                        fontSize={18}
                        fontWeight={400}
                    >
                        Perfil
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenCart(true)}>
                    <Typography
                        sx={{
                            ':hover': { cursor: 'pointer', color: 'white' },
                            ml: 1,
                            my: 0.2,
                            color: 'gray',
                        }}
                        fontSize={18}
                        fontWeight={400}
                    >
                        Carrito
                    </Typography>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <>
            <Box maxWidth={1100} width={'100%'} mx={'auto'} p={2}>
                <AppBar
                    position="relative"
                    sx={{
                        maxWidth: 1100,
                        mx: 'auto',
                        height: '45px',
                        background: 'transparent',
                        boxShadow: 'none',
                    }}
                >
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'center'}>
                            <img
                                src={Logo}
                                width={25}
                                height={25}
                                style={{ borderRadius: 100, marginRight: 10 }}
                            />

                            <Typography
                                variant="h5"
                                mr={4}
                                sx={{ ':hover': { borderBottom: 'none', color: 'white' } }}
                            >
                                RESTAURANTE
                            </Typography>
                            <Typography
                                mr={1.5}
                                sx={{
                                    borderBottom: params.pathname.includes('menu')
                                        ? `2px solid ${palette.secondary.main}`
                                        : 'none',
                                    color: params.pathname.includes('menu')
                                        ? palette.secondary.main
                                        : 'white',
                                }}
                                display={{ md: 'flex', sm: 'none', xs: 'none' }}
                                variant="h5"
                                onClick={() => navigate('/dasdasfasfasd/menu')}
                            >
                                MENU
                            </Typography>
                            <Typography
                                variant="h5"
                                onClick={() => navigate('/dasdasfasfasd/location')}
                                display={{ md: 'flex', sm: 'none', xs: 'none' }}
                                sx={{
                                    borderBottom: params.pathname.includes('location')
                                        ? `2px solid ${palette.secondary.main}`
                                        : 'none',
                                    color: params.pathname.includes('location')
                                        ? palette.secondary.main
                                        : 'white',
                                }}
                            >
                                UBICACION
                            </Typography>
                        </Box>
                        <Box
                            display={{ md: 'flex', sm: 'none', xs: 'none' }}
                            alignItems={'center'}
                            gap={1}
                        >
                            <IconButton
                                sx={{
                                    border: params.pathname.includes('profile')
                                        ? `1px solid ${palette.secondary.main}`
                                        : 'none',
                                }}
                                onClick={() => setOpenProfile(true)}
                            >
                                <PersonOutlineOutlinedIcon
                                    sx={{
                                        fontSize: 22,
                                    }}
                                />
                            </IconButton>
                            <IconButton
                                onClick={() => setOpenCart(true)}
                                sx={{ background: '#518BE1', ':hover': { background: '#518BE1' } }}
                            >
                                <ShoppingCartOutlinedIcon sx={{ fontSize: 22 }} />
                            </IconButton>
                        </Box>
                        <Box display={{ md: 'none', sm: 'flex', xs: 'flex' }}>
                            <IconButton onClick={() => setDrawerOpen(true)} sx={{ p: 0 }}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </AppBar>

                <Box minHeight={{ md: 'calc(100vh - 77px)', xs: 'auto' }}>{children}</Box>
                <Drawer
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',

                            background: palette.primary.light,
                        },
                    }}
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {drawerList()}
                </Drawer>

                <FullScreenDialog
                    title="Carrito"
                    open={openCart}
                    handleClose={() => setOpenCart(false)}
                >
                    <CrudCart />
                </FullScreenDialog>

                <FullScreenDialog
                    title="Perfil"
                    open={openProfile}
                    handleClose={() => setOpenProfile(false)}
                >
                    <CrudProfile />
                </FullScreenDialog>
                <PrimaryDialog
                    open={open}
                    title={
                        status === 'login'
                            ? 'Bienvenido'
                            : status === 'register'
                              ? 'Registrate'
                              : 'Nueva contraseña'
                    }
                >
                    {status === 'login' && (
                        <Login onCancel={onCancel} onSwitch={() => setStatus('register')} />
                    )}
                    {status === 'register' && (
                        <Register onCancel={onCancel} onSwitch={() => setStatus('login')} />
                    )}

                    {status === 'password' && (
                        <Register onCancel={onCancel} onSwitch={() => setStatus('login')} />
                    )}
                </PrimaryDialog>
            </Box>
        </>
    )
}
