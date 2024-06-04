'use client'

import { ThemeProvider } from "@mui/material"
import theme from "../Themes"
import { ReactNode } from "react"

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}
