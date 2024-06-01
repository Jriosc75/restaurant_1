import { Box, Button, Typography, useTheme } from '@mui/material'
import PrimaryDialog from '../../../../components/common/modal/PrimaryDialog'
import { useState } from 'react'
import FormBurger from '../form/FormBurger'
import Foto from '../../../../../public/img/foto1.jpeg'
export default function CardBurger() {
    const { palette } = useTheme()

    const [open, setOpen] = useState(false)
    const onCancel = () => {
        setOpen(false)
    }
    return (
        <>
            <Box
                sx={{
                    background: palette.primary.contrastText,
                    borderRadius: 3,
                }}
            >
                <img
                    src={Foto}
                    height={180}
                    style={{
                        width: '100%',
                        borderRadius: 12,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }}
                />

                <Box p={2}>
                    <Box mb={1} mt={0} display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="h3">Nombre</Typography>
                        <Typography variant="h3">S/ 12</Typography>
                    </Box>
                    <Typography variant="body2">
                        ingredientes, ingredientes,ingredientes, ingredienes ingrege, indesdes,
                        ingrediens, ingreger, inigreger inigerge, inigr ege213123...
                    </Typography>
                    <Box mt={3} display={'flex'} justifyContent={'end'}>
                        <Button variant="contained" color="warning" onClick={() => setOpen(true)}>
                            Realizar pedido
                        </Button>
                    </Box>
                </Box>
            </Box>

            <PrimaryDialog open={open}>
                <FormBurger onCancel={onCancel} />
            </PrimaryDialog>
        </>
    )
}
