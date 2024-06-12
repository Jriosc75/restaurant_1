import { Dialog, Typography, Zoom, useTheme } from '@mui/material'
import { ReactNode } from 'react'

interface PrimaryDialogProps {
    open: boolean
    children: ReactNode
    title?: string
}

export default function PrimaryDialog({ open, children, title }: PrimaryDialogProps) {
    const { palette } = useTheme()
    return (
        <Dialog
            open={open}
            id="base-dialog"
            TransitionComponent={Zoom}
            transitionDuration={400}
            sx={{
                '& .MuiDialog-paper': {
                    p: 0,
                    minWidth: { md: '330px', xs: '92%' },
                    maxWidth: '500px',
                    width: '550px',
                    borderRadius: 3,
                    background:
                        'linear-gradient(to right top, #131313, #1d1d1d, #282828, #333333, #2D2D2D)',
                },
            }}
        >
            {title && (
                <Typography
                    color={palette.primary.main}
                    fontSize={18}
                    fontWeight={700}
                    textAlign={'center'}
                    mb={1.5}
                >
                    {title}
                </Typography>
            )}

            {children}
        </Dialog>
    )
}
