import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    IconButton,
    Typography,
    useTheme,
} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { useState } from 'react'

interface Props {
    onCancel: () => void
}
const cremas = [
    { id: 1, name: 'Mayonesa' },
    { id: 2, name: 'Ketchup' },
    { id: 3, name: 'Tártara' },
    { id: 4, name: 'Mostaza' },
    { id: 5, name: 'Ají' },
    { id: 6, name: 'Barbacoa' },
    { id: 7, name: 'Ajo' },
]

const adicionales = [
    { id: 1, name: 'Queso', price: 0.5 },
    { id: 2, name: 'Tocino', price: 1.0 },
    { id: 3, name: 'Lechuga', price: 0.3 },
    { id: 4, name: 'Tomate', price: 0.4 },
    { id: 5, name: 'Cebolla', price: 0.2 },
    { id: 6, name: 'Pepinillos', price: 0.35 },
]
export default function FormBurger({ onCancel }: Props) {
    const { palette } = useTheme()
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1)
        }
    }
    const renderFormGroups = (index: number) => (
        <div key={index}>
            <Typography variant="h4" mt={2}>
                Cremas
            </Typography>
            <Box flexDirection={'column'} display={{ md: 'none', sm: 'none', xs: 'flex' }}>
                {cremas.map((item) => (
                    <Box mt={1}>
                        <Divider />
                        <Box
                            mt={1}
                            alignItems={'center'}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography variant="body2">{item.name}</Typography>
                            <Checkbox
                                size="small"
                                icon={
                                    <RadioButtonUncheckedIcon
                                        sx={{ color: '#AAAAAA', opacity: 0.6 }}
                                    />
                                }
                                checkedIcon={<RadioButtonCheckedIcon color="warning" />}
                                sx={{ p: 0.5 }}
                                name={`${item.id}_${index}`}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
            <FormGroup
                style={{
                    flexDirection: 'row',
                    paddingLeft: 6,
                    gap: 3,
                    marginTop: 8,
                }}
                sx={{ display: { md: 'flex', sm: 'flex', xs: 'none' } }}
            >
                {cremas.map((item) => (
                    <FormControlLabel
                        key={item.id}
                        control={
                            <Checkbox
                                size="small"
                                icon={
                                    <RadioButtonUncheckedIcon
                                        sx={{ color: '#AAAAAA', opacity: 0.6 }}
                                    />
                                }
                                checkedIcon={<RadioButtonCheckedIcon color="warning" />}
                                sx={{ p: 0.5 }}
                                name={`${item.id}_${index}`}
                            />
                        }
                        label={<Typography variant="body2">{item.name}</Typography>}
                    />
                ))}
            </FormGroup>
            <Typography variant="h4" mt={2}>
                Adicionales
            </Typography>
            <Box flexDirection={'column'} display={{ md: 'none', sm: 'none', xs: 'flex' }}>
                {adicionales.map((item) => (
                    <Box mt={1}>
                        <Divider />
                        <Box
                            mt={1}
                            alignItems={'center'}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography variant="body2">
                                {' '}
                                {item.name}: S/.{item.price}
                            </Typography>
                            <Checkbox
                                size="small"
                                icon={
                                    <RadioButtonUncheckedIcon
                                        sx={{ color: '#AAAAAA', opacity: 0.6 }}
                                    />
                                }
                                checkedIcon={<RadioButtonCheckedIcon color="warning" />}
                                sx={{ p: 0.5 }}
                                name={`${item.id}_${index}`}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
            <FormGroup
                style={{
                    flexDirection: 'row',
                    paddingLeft: 6,
                    gap: 3,
                    marginTop: 8,
                }}
                sx={{ display: { md: 'flex', sm: 'flex', xs: 'none' } }}
            >
                {adicionales.map((item) => (
                    <FormControlLabel
                        key={item.id}
                        control={
                            <Checkbox
                                size="small"
                                icon={
                                    <RadioButtonUncheckedIcon
                                        sx={{ color: '#AAAAAA', opacity: 0.6 }}
                                    />
                                }
                                checkedIcon={<RadioButtonCheckedIcon color="warning" />}
                                sx={{ p: 0.5 }}
                                name={`${item.id}_${index}`}
                            />
                        }
                        label={
                            <Typography variant="body2">
                                {item.name} S/ {item.price}
                            </Typography>
                        }
                    />
                ))}
            </FormGroup>
        </div>
    )
    return (
        <form>
            <Box display={'flex'} mb={2} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant="h2">Nombre de la burger</Typography>
                <Box
                    display={'flex'}
                    gap={1}
                    alignItems={'center'}
                    sx={{
                        width: 'fit-content',
                    }}
                >
                    <Typography variant="h3" fontSize={13}>
                        Cantidad:
                    </Typography>
                    <Box display={'flex'} alignItems={'center'}>
                        <IconButton
                            sx={{ p: 0.4 }}
                            onClick={handleDecrement}
                            disabled={quantity === 1}
                        >
                            <DoDisturbOnOutlinedIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="h2" fontSize={19} sx={{ px: 0.5 }}>
                            {quantity}
                        </Typography>
                        <IconButton sx={{ p: 0.4 }} onClick={handleIncrement}>
                            <AddCircleOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body2">
                ingredientes, ingredientes,ingredientes, ingredienes ingrege, indesdes, ingrediens,
                ingreger, inigreger inigerge, inigr ege213123
            </Typography>

            {Array.from({ length: quantity }, (_, index) => (
                <Box key={index}>
                    {index === 0 ? null : (
                        <>
                            <Divider sx={{ mt: 3, mb: 2 }} />
                            <Typography variant="h4" mb={0.5}>
                                Hamburguesa {index + 1}
                            </Typography>
                            <Typography variant="body2">
                                Seleccione las cremas correspondientes y los adicionales que desee
                            </Typography>
                        </>
                    )}

                    {renderFormGroups(index)}
                </Box>
            ))}
            <Box mt={4} display={'flex'} justifyContent={'center'} gap={2}>
                <Button variant="text" sx={{ color: palette.primary.main }} onClick={onCancel}>
                    Cancelar
                </Button>
                <Button variant="contained" color="success">
                    Agregar al carrito
                </Button>
            </Box>
        </form>
    )
}
