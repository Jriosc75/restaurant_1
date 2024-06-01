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
                    py: 4,
                    px: { md: 5, sm: 2, xs: 2.5 },
                    minWidth: { md: '320px', xs: '92%' },
                    maxWidth: '500px',
                    width: '550px',
                    borderRadius: 3,
                    background: '#252430',
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
