'use client'
import {
    TextField,
    TextFieldProps,
    styled,
    useTheme,
    Typography,
    InputAdornment,
    IconButton,
    Box,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { RefObject, forwardRef, useState } from 'react'

type BaseProps = {
    label?: string
    placeholder?: string
    messageError?: string
}

type Props = BaseProps & TextFieldProps

export const PrimaryPasswordInput = forwardRef(function PrimaryPasswordInput(
    { placeholder, label, messageError, ...textFieldProps }: Props,
    ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined
) {
    const { palette } = useTheme()
    const [showPassword, setShowPassword] = useState(false)

    const CssTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            background: 'transparent',
            borderRadius: '6px',
            border: `1px solid ${palette.background.paper}`,
            '&:hover fieldset': {
                borderColor: 'gray',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'gray',
            },
        },
        '& .MuiInputLabel-root': {
            color: '#6A6D72',
            background: 'transparent',
            paddingTop: '0px',
            fontWeight: 300,
            fontSize: '15px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray',
            fontSize: '14px',
        },

        '& .MuiOutlinedInput-root input ': {
            borderRadius: '12px',
            background: 'transparent',
        },

        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
            color: palette.primary.main,
        },
        '& input': {
            height: '24px',
            fontWeight: 300,
            fontSize: '14px',
            color: palette.primary.main,
            '&[type="number"]': {
                '&::-webkit-inner-spin-button': {
                    webkitppearance: 'none',
                    margin: 0,
                },
                mozAppearance: 'textfield',
            },
            '::-ms-reveal': {
                display: 'none',
            },
        },
    })
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    return (
        <Box mt={2}>
            <Typography fontWeight={400} fontSize={13} mb={0} ml={0}>
                {label}
            </Typography>
            <CssTextField
                ref={ref}
                id="input-with-icon-textfield"
                size="small"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                placeholder={placeholder}
                {...textFieldProps}
                sx={{ width: '100%', background: 'transparent' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff fontSize="small" />
                                ) : (
                                    <Visibility fontSize="small" />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Typography color={'error'} variant="body1" fontSize={12}>
                {messageError}
            </Typography>
        </Box>
    )
})

PrimaryPasswordInput.displayName = 'PrimaryPasswordInput'
