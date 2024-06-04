import { Fragment } from "react"
import { TextFieldController } from "../../Controllers/TextFieldController"
import { signupValidation } from "../../Validation/SignupValidation"
import { Grid } from "@mui/material"

export const ThirdStep = () => {
    return (
        <Fragment>
            <Grid item xs={6}>
                <TextFieldController name="zipcode" label="Zip Code" rules={signupValidation.zipcode} />
            </Grid>
            <Grid item xs={6}>
                <TextFieldController name="phone" label="Phone" rules={signupValidation.phone} />
            </Grid>
        </Fragment>
    )
}
