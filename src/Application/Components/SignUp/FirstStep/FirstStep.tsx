import { Fragment } from "react"
import { TextFieldController } from "../../Controllers/TextFieldController"
import { signupValidation } from "../../Validation/SignupValidation"
import { Grid } from "@mui/material"

export const FirstStep = () => {
    return (
        <Fragment>
            <Grid item xs={6}>
                <TextFieldController name="email" label="Email" rules={signupValidation.email} />
            </Grid>
            <Grid item xs={6}>
                <TextFieldController name="username" label="Username" rules={signupValidation.username} />
            </Grid>
            <Grid item xs={6}>
                <TextFieldController name="password" label="Password" type="password" rules={signupValidation.password} />
            </Grid>
            <Grid item xs={6}>
                <TextFieldController name="firstname" label="First Name" rules={signupValidation.firstname} />
            </Grid>
            <Grid item xs={6}>
                <TextFieldController name="lastname" label="Last Name" rules={signupValidation.lastname} />
            </Grid>
        </Fragment >
    )
}
