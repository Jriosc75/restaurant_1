import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { lightTheme } from './light-theme'
import { darkTheme } from './dark-theme'

function getActiveTheme(themeMode: 'light' | 'dark') {
    return themeMode === 'light' ? lightTheme : darkTheme
}

function Muitheme({ children }: { children: React.ReactNode }) {
    const [selectedTheme] = useState<'light' | 'dark'>('dark')

    useEffect(() => {
        document.body.style.background =
            selectedTheme === 'light'
                ? '#F3F3F3'
                : 'linear-gradient(to right top, #131313, #1d1d1d, #282828, #333333, #646464)'
    }, [selectedTheme])
    const activeTheme = getActiveTheme(selectedTheme)

    return (
        <ThemeProvider key={selectedTheme} theme={activeTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Muitheme
