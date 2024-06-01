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
import { SearchInputs } from '../common/input/SearchInputs'
import PrimaryDialog from '../common/modal/PrimaryDialog'
import Login from '../../ui/auth/Login'
import Register from '../../ui/auth/Register'

interface Props {
    children: ReactNode
    search: boolean
}
export default function ClientLayout({ children, search = true }: Props) {
    const navigate = useNavigate()
    const { palette } = useTheme()
    const params = useLocation()
    const [open, setOpen] = useState(false)
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
            sx={{ width: 170, background: palette.primary.contrastText }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem onClick={() => navigate('/dasdasfasfasd/menu')}>
                    <Typography
                        sx={{
                            fontWeight: params.pathname.includes('menu') ? 500 : 400,
                            color: params.pathname.includes('menu') ? 'white' : 'gray',
                            ':hover': { cursor: 'pointer', color: 'white' },
                            ml: 1,
                            my: 1,
                        }}
                        variant="body1"
                        fontSize={16}
                    >
                        Menu
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem onClick={() => navigate('/dasdasfasfasd/location')}>
                    <Typography
                        sx={{
                            fontWeight: params.pathname.includes('location') ? 500 : 400,
                            color: params.pathname.includes('location') ? 'white' : 'gray',
                            ':hover': { cursor: 'pointer', color: 'white' },
                            ml: 1,
                            my: 1,
                        }}
                        variant="body1"
                        fontSize={16}
                    >
                        Ubicacion
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpen(true)}>
                    <Typography
                        sx={{
                            fontWeight: params.pathname.includes('auth') ? 500 : 400,
                            color: params.pathname.includes('auth') ? 'white' : 'gray',
                            ':hover': { cursor: 'pointer', color: 'white' },
                            ml: 1,
                            my: 1,
                        }}
                        variant="body1"
                        fontSize={16}
                    >
                        Perfil
                    </Typography>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <>
            <Box maxWidth={1200} my={2} width={'100%'} mx={'auto'} px={2}>
                <AppBar position="fixed" sx={{ px: 2, background: '#252430', boxShadow: 'none' }}>
                    <Box
                        display={'flex'}
                        position={'static'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        height={42}
                        maxWidth={1200}
                        mx={'auto'}
                        width={'100%'}
                        my={1.5}
                    >
                        <Box display={'flex'} alignItems={'center'} gap={1}>
                            <img
                                src={Logo}
                                className="logo-sidebar"
                                height={40}
                                width={40}
                                style={{ borderRadius: 100 }}
                            />
                            <Typography variant="h2">Los Pollitos</Typography>
                        </Box>
                        <Box
                            display={{ md: 'flex', sm: 'none', xs: 'none' }}
                            alignItems={'center'}
                            gap={2}
                        >
                            {search && <SearchInputs placeholder="Buscar" />}
                            <Typography
                                sx={{
                                    fontWeight: params.pathname.includes('menu') ? 500 : 400,
                                    color: params.pathname.includes('menu') ? 'white' : 'gray',
                                    ':hover': { cursor: 'pointer', color: 'white' },
                                }}
                                variant="body1"
                                onClick={() => navigate('/dasdasfasfasd/menu')}
                            >
                                Menu
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: params.pathname.includes('location') ? 500 : 400,
                                    color: params.pathname.includes('location') ? 'white' : 'gray',
                                    ':hover': { cursor: 'pointer', color: 'white' },
                                }}
                                onClick={() => navigate('/dasdasfasfasd/location')}
                                variant="body1"
                            >
                                Ubicacion
                            </Typography>
                            {/*                     <Typography
                        sx={{
                            fontWeight: params.pathname.includes('cart') ? 500 : 400,
                            color: params.pathname.includes('cart') ? 'white' : 'gray',
                            ':hover': { cursor: 'pointer', color: 'white' },
                        }}
                        variant="body1"
                        onClick={() => navigate('/dasdasfasfasd/cart')}
                    >
                        Carrito
                    </Typography> */}
                            <Typography
                                sx={{
                                    fontWeight: params.pathname.includes('porfile') ? 500 : 400,
                                    color: params.pathname.includes('porfile') ? 'white' : 'gray',
                                    ':hover': { cursor: 'pointer', color: 'white' },
                                }}
                                variant="body1"
                                onClick={() => setOpen(true)}
                            >
                                Perfil
                            </Typography>
                        </Box>
                        <Box
                            display={{ md: 'none', sm: 'flex', xs: 'flex' }}
                            alignItems={'center'}
                            gap={2}
                        >
                            <IconButton sx={{ p: 0 }} onClick={toggleDrawer(true)}>
                                <MenuIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                        </Box>
                    </Box>
                </AppBar>

                <Box mt={9} mb={7}>
                    {children}
                </Box>
                <Drawer
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',

                            background: palette.primary.contrastText,
                        },
                    }}
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {drawerList()}
                </Drawer>
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
            {/*             <Box position="fixed" bottom={0} width="100%">
                <AppBar position="static" sx={{ background: '#252430', boxShadow: 'none' }}>
                    <Box
                        maxWidth={1200}
                        mx={'auto'}
                        sx={{
                            borderRadius: 3,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            background: palette.primary.contrastText,

                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: { md: 6, xs: 2 },
                            pb: 2,
                            pt: 3,
                        }}
                    >
                        <Typography variant="h3">Carrito</Typography>
                        <Box>
                            <Typography variant="h2">S/12.30</Typography>
                        </Box>
                    </Box>
                </AppBar>
            </Box> */}
        </>
    )
}
