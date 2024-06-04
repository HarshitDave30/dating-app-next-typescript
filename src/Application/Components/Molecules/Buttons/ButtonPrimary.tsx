import { ReactNode } from "react"
import { ButtonPrimaryStyled as Button } from "./Button.style"

interface ButtonPrimaryProps {
    children: ReactNode,
    sx?: any,
    type?: "button" | "submit" | "reset";
    onClick?: () => void
}

export const ButtonPrimary = ({ children, ...rest }: ButtonPrimaryProps) => {
    return (
        <Button variant="contained" {...rest}>{children}</Button>
    )
}
