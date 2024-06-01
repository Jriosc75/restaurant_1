import { TextField, TextFieldProps, styled, useTheme, Typography, Box } from '@mui/material'
import { RefObject, forwardRef } from 'react'

type BaseProps = {
    label?: string
    placeholder?: string
    messageError?: string
    auth?: boolean
}

type Props = BaseProps & TextFieldProps

export const PrimaryInput = forwardRef(function PrimaryInput(
    { placeholder, label, messageError, auth = false, ...textFieldProps }: Props,
    ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined
) {
    const { palette } = useTheme()

    const CssTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            background: 'transparent',
            borderRadius: '12px',
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
            height: '30px',
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
        '& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px #252430 inset !important`,
            WebkitTextFillColor: palette.primary.main,
            borderRadius: '12px',
            background: 'transparent',
        },
    })
    return (
        <Box>
            <Typography fontWeight={400} fontSize={13} mb={0} ml={0}>
                {label}
            </Typography>
            <CssTextField
                ref={ref}
                id="input-with-icon-textfield"
                size="small"
                variant="outlined"
                placeholder={placeholder}
                {...textFieldProps}
                sx={{ width: '100%', background: 'transparent' }}
            />
            <Typography color={'error'} variant="body1" fontSize={12}>
                {messageError}
            </Typography>
        </Box>
    )
})

PrimaryInput.displayName = 'PrimaryInput'
