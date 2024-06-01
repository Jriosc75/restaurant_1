import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    styled,
    useTheme,
} from '@mui/material'

import { SelectProps } from '@mui/material/Select'
interface Option {
    value: string | number
    label: string
}
interface BaseProps {
    messageError?: string
    options: Option[]
}

type Props = BaseProps & SelectProps

export default function SelectInputPrimary({ options, messageError, ...selectProps }: Props) {
    const { palette } = useTheme()

    const CssFormControl = styled(FormControl)({
        width: 260,
        height: 30,
        '& .MuiSelect-standard': {
            fontSize: 14,
            pl: 1,
            py: 0.3,
            /*             border: theme
                ? 'none'
                : `1px solid ${palette.background.paper}`, */
            '&:hover fieldset': {
                borderColor: '#547FF7',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#547FF7', // Cambiado a rojo cuando el campo está enfocado
            },
        },
        '& .MuiOutlinedInput-root input ': {
            borderRadius: '12px',
            background: 'red',
        },
        '& MuiSelect-select': {
            fontSize: 30,
        },
        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
            color: palette.primary.main,
        },
        '& input': {
            color: palette.primary.main,
            '&[type="number"]': {
                '&::-webkit-inner-spin-button': {
                    webkitppearance: 'none',
                    margin: 0,
                },
                mozAppearance: 'textfield',
            },
        },
    })
    return (
        <Box>
            <CssFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selecciona una categoria</InputLabel>
                <Select
                    variant="standard"
                    {...selectProps}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ fontSize: '14px', color: palette.primary.main }} // Añade padding para el texto seleccionado
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}
                            sx={{ fontSize: '14px', color: palette.primary.main }}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                <Typography color={'error'} variant="body1" fontSize={12}>
                    {messageError}
                </Typography>
            </CssFormControl>
        </Box>
    )
}
