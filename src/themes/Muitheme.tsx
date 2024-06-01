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
        document.body.style.backgroundColor = selectedTheme === 'light' ? '#F3F3F3' : '#252430'
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
