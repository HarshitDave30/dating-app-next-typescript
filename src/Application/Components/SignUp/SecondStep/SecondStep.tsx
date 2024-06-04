import { Fragment } from "react"
import { TextFieldController } from "../../Controllers/TextFieldController"
import { signupValidation } from "../../Validation/SignupValidation"
import { Grid } from "@mui/material"

export const SecondStep = () => {
    return (
        <Fragment>
            <Grid item xs={6}>
                <TextFieldController name="city" label="City" rules={signupValidation.city} />
            </Grid>
            <Grid item xs={6}>
                <TextFieldController name="street" label="Street" rules={signupValidation.street} />
            </Grid>
            <Grid item xs={6}>
                <TextFieldController name="number" label="Number" type="number" rules={signupValidation.number} />
            </Grid>
        </Fragment>
    )
}
