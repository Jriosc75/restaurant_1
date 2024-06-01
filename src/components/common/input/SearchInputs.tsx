import { TextField, TextFieldProps, styled, useTheme, Typography, Box } from '@mui/material'
import { RefObject, forwardRef } from 'react'
import SearchIcon from '@mui/icons-material/Search'
type BaseProps = {
    label?: string
    placeholder?: string
    messageError?: string
    auth?: boolean
}

type Props = BaseProps & TextFieldProps

export const SearchInputs = forwardRef(function SearchInputs(
    { placeholder, label, messageError, auth = false, ...textFieldProps }: Props,
    ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined
) {
    const { palette } = useTheme()

    const CssTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            background: palette.primary.contrastText,
            borderRadius: '16px',
            border: `0px solid ${palette.primary.contrastText}`,
            borderColor: palette.primary.contrastText,
            '&:hover fieldset': {
                borderColor: palette.primary.contrastText,
            },
            '&.Mui-focused fieldset': {
                borderColor: palette.primary.contrastText,
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.contrastText,
        },
        '& .MuiInputLabel-root': {
            color: '#6A6D72',
            background: palette.primary.contrastText,
            paddingTop: '0px',
            fontWeight: 400,
            fontSize: '15px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray',
            fontSize: '14px',
        },

        '& .MuiOutlinedInput-root input ': {
            borderRadius: '16px',
            background: palette.primary.contrastText,
        },

        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
            color: palette.primary.main,
        },
        '& input': {
            height: '24px',
            fontSize: '14px',
            color: palette.primary.main,
            fontWeight: 400,
            '&[type="number"]': {
                '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0,
                },
                '-moz-appearance': 'textfield',
            },
        },
        '& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px ${palette.primary.contrastText} inset !important`,
            WebkitTextFillColor: palette.primary.main,
            borderRadius: '16px',
        },
    })
    return (
        <Box position={'relative'}>
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
            <SearchIcon
                fontSize="medium"
                sx={{
                    color: 'grey',
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 3,
                }}
            />
        </Box>
    )
})

SearchInputs.displayName = 'SearchInputs'
