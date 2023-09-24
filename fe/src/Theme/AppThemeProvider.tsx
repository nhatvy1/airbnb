'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey, pink } from '@mui/material/colors'
import React from 'react'

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary']
    }
    interface PaletteOptions {
        tertiary?: PaletteOptions['primary']
    }
    interface PaletteColor {
        lighter?: string
        darker?: string
    }
    interface SimplePaletteColorOptions {
        lighter?: string
        darker?: string
    }
}

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Raleway',
            // textTransform: 'none',
            fontSize: 16,
        },
    },
    palette: {
        primary: {
            main: grey[700],
        },
        secondary: {
            main: pink[500],
        },
        tertiary: {
            main: 'black',
            contrastText: '#787878',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                sx: {
                    px: 1,
                },
                variant: 'subtitle2',
                textTransform: 'capitalize',
            },
        },
        MuiStack: {
            defaultProps: {
                sx: {
                    px: 2,
                    py: 1,
                },
                spacing: 2,
                direction: 'row',
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiLink: {
            defaultProps: {
                sx: {
                    color: (theme) => theme.palette.primary.main,
                },
                underline: 'none',
            },
        },
        MuiButton: {
            defaultProps: {
                size: 'small',
                sx: {
                    p: 0,
                },
                disableRipple: true,
                variant: 'text',
            },
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
})

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppThemeProvider
