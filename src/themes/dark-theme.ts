import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF',
            contrastText: '#393947',
        },
        secondary: {
            main: '#606082',
        },
        success: {
            main: '#537B54',
        },
        warning: {
            main: '#C16A4F',
        },
        error: {
            main: '#DD6158',
        },
        background: {
            paper: '#1F283E',
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'Montserrat',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '14px',
                    padding: '10px 24px',
                    boxShadow: 'none',
                    fontWeight: 500,
                    color: 'white',
                    fontSize: '12px',
                    textTransform: 'none',
                    '&.Mui-disabled': {
                        background: '#A2A2A2',
                        color: '#fff',
                    },
                    '&:hover': {
                        opacity: 1,
                        boxShadow: 'none',
                    },
                    '@media (max-width: 600px)': {
                        fontSize: 12,
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 24,
                    fontWeight: 600,
                    color: '#FFFFFF',
                    '@media (max-width: 600px)': {
                        fontSize: 20,
                    },
                },
                h2: {
                    fontSize: 18,
                    fontWeight: 500,
                    color: '#FFFFFF',
                    '@media (max-width: 600px)': {
                        fontSize: 16,
                    },
                },
                h3: {
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#FFFFFF',
                },
                h4: {
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#FFFFFF',
                    '@media (max-width: 600px)': {
                        fontSize: 20,
                    },
                },
                h5: {
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: 500,
                    '@media (max-width: 600px)': {
                        fontSize: 14,
                        fontWeight: 500,
                    },
                },
                subtitle1: {
                    fontSize: 14,
                    fontWeight: 300,
                    color: '#AAAAAA',
                },
                subtitle2: {
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#AAAAAA',
                },
                body1: {
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#AAAAAA',
                },
                body2: {
                    fontSize: 13,
                    fontWeight: 400,
                    color: '#AAAAAA',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: { borderRadius: '6px', boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.10)' },
            },
        },
    },
})
