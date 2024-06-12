import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF',
            contrastText: '#5F5F5F',
            light: '#1D1D1D',
        },
        secondary: {
            main: '#518BE1',
        },
        success: {
            main: '#458448',
        },
        warning: {
            main: '#C16A4F',
        },
        error: {
            main: '#DD6158',
        },
        background: {
            paper: '#1F283E',
            default: '#BDBDBD',
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'Roboto Condensed',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    padding: '8px 16px',
                    boxShadow: 'none',
                    fontWeight: 400,
                    color: 'white',
                    fontSize: '13px',
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
                        fontSize: 13,
                        borderRadius: '16px',
                        padding: '8px 16px',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 72,
                    lineHeight: '70px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    '@media (max-width: 600px)': {
                        fontSize: 36,
                        fontWeight: 700,
                        lineHeight: '32px',
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
                    fontSize: 15,
                    color: '#FFFFFF',
                    fontWeight: 400,

                    '@media (max-width: 600px)': {
                        fontSize: 14,
                    },
                },
                h5: {
                    fontSize: 15,
                    color: '#FFFFFF',
                    fontWeight: 400,
                    ':hover': {
                        cursor: 'pointer',
                        color: '#518BE1',
                        borderBottom: '2px solid #518BE1',
                    },
                    '@media (max-width: 600px)': {
                        fontSize: 14,
                        fontWeight: 400,
                    },
                },
                subtitle1: {
                    fontSize: 15,
                    fontWeight: 300,
                    color: '#BDBDBD',
                    '@media (max-width: 600px)': {
                        fontSize: 14,
                        fontWeight: 300,
                    },
                },
                subtitle2: {
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#FFFFFF',
                },
                body1: {
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#BDBDBD',
                },
                body2: {
                    fontSize: 13,
                    fontWeight: 400,
                    color: '#BDBDBD',
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
