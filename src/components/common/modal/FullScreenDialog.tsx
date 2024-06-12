import { AppBar, Box, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ReactNode, forwardRef } from 'react'
import { TransitionProps } from '@mui/material/transitions'
const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

interface Props {
    open: boolean
    children: ReactNode
    handleClose: () => void
    title?: string
}

export default function FullScreenDialog({ title, handleClose, open, children }: Props) {
    return (
        <Dialog
            sx={{
                '& .MuiDialog-paper': {
                    background:
                        'linear-gradient(to right top, #131313, #1d1d1d, #282828, #333333, #2D2D2D)',
                },
            }}
            fullScreen
            open={open}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative', background: '#1D1D1D' }}>
                <Toolbar
                    sx={{
                        maxWidth: 1150,
                        mx: 'auto',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h2" component="div">
                        {title}
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon sx={{ fontSize: 24 }} color="error" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box maxWidth={1100} width={'100%'} mx={'auto'} p={{ md: 0, sm: 2, xs: 2 }}>
                {children}
            </Box>
        </Dialog>
    )
}
