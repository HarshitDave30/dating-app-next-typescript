import { TextField, Typography } from "@mui/material"
import { Fragment } from "react"
import { Controller, useFormContext } from "react-hook-form"

interface TextFieldControllerProps {
    name: string,
    label: string,
    variant?: "outlined",
    type?: 'text' | 'number' | 'password',
    rules?: any
}

export const TextFieldController = (props: TextFieldControllerProps) => {

    const { label, variant = "outlined", name, type = 'text', rules, ...rest } = props

    const { control, formState: { errors } } = useFormContext()

    return (
        <Controller name={name} rules={rules} control={control} render={({ field }: any) => (
            <Fragment>
                <TextField label={label} variant={variant} type={type} {...field} {...rest} fullWidth />
                <Typography variant="body2" color='red'>
                    {(errors[name] as any)?.message}
                </Typography>
            </Fragment>
        )} />
    )
}
