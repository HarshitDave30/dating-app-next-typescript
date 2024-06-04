import { Alert } from "@mui/material"

export const Errors = ({ error }: any) => {
    return (
        <Alert variant="filled" severity="error">
            {error}
        </Alert>
    )
}
