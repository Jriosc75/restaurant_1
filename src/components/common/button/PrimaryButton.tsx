import { Button, styled } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

interface Props {
    text: string
    onClick: () => void
}

const StyledButton = styled(Button)(() => ({
    position: 'relative',
    overflow: 'hidden',
    p: 0,
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid white',
    width: 'fit-content',
    borderRadius: 40,
    backgroundColor: 'transparent',
    color: 'white',
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '100%',
        height: '100%',
        width: '100%',
        backgroundColor: '#518BE1',
        zIndex: 0,
        transition: 'left 0.8s ease',
    },
    '&:hover::before': {
        left: 0,
    },
    '& .MuiButton-endIcon': {
        zIndex: 1,
    },
    '& .MuiButtonBase-root': {
        padding: 0,
    },
    '& span': {
        zIndex: 1,
        marginLeft: 2,
    },
}))
export default function PrimaryButton({ onClick, text }: Props) {
    return (
        <StyledButton
            onClick={onClick}
            sx={{
                p: { md: 0, sm: 0, xs: 0 },
                pl: { md: 3, sm: 3, xs: 2 },
                borderRadius: { md: '24', xs: '24px' },
            }}
            endIcon={
                <ArrowRightIcon
                    sx={{
                        fontSize: 22,
                        height: 43,
                        width: 43,
                        p: 1,
                        ml: 1,
                        borderRadius: 40,
                        background: '#518BE1',
                    }}
                />
            }
        >
            <span style={{ fontSize: 14, fontWeight: 400 }}>{text}</span>
        </StyledButton>
    )
}
