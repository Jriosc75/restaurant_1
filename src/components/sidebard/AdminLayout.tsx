import MenuIcon from '@mui/icons-material/Menu'
import { ReactNode, useState } from 'react'
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Toolbar,
    Typography,
} from '@mui/material'

const drawerWidth = 240

interface Props {
    window?: () => Window
    children: ReactNode
}

export default function AdminLayout({ children, window }: Props) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const handleDrawerClose = () => {
        setIsClosing(true)
        setMobileOpen(false)
    }

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false)
    }

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen)
        }
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Perfil', 'Manu', 'Clientes', 'Cerrar sesion'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <Typography ml={2} variant="subtitle1">
                                {text}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },

                    background: 'transparent',
                    boxShadow: 'none',
                    p: 0,
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h2">Responsive drawer</Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            background: '#1D1D1D',
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderRight: 'transparent',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            background: '#1D1D1D',
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderRight: 'transparent',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    minHeight: 'calc(100vh - 0px)',
                    flexGrow: 1,
                    p: { md: '80px 16px 16px 16px', xs: '62px 16px 16px 16px' },
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                {children}
            </Box>
        </Box>
    )
}
