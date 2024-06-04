'use client'

import { Dispatch, Fragment, SetStateAction, useState } from "react"
import { Box, Container, Grid } from "@mui/material"
import { ButtonPrimary } from "../Molecules/Buttons/ButtonPrimary"
import { Header } from "../AppLayout/Header/Header"
import { UsePost } from "@/Application/Hooks/UsePost"
import { FormProvider, useForm } from "react-hook-form"
import { FirstStep } from "./FirstStep/FirstStep"
import { SecondStep } from "./SecondStep/SecondStep"
import { ThirdStep } from "./ThirdStep/ThirdStep"
import { Errors } from "@/Application/Utils/Errors"

export interface FormData {
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    city: string;
    street: string;
    number: number;
    zipcode: string;
    lat: string;
    long: string;
    phone: string;
}

const nextSteps = (steps: number, setSteps: Dispatch<SetStateAction<number>>) => () => {
    if (steps !== 3) setSteps(steps + 1)
}

const prevSteps = (steps: number, setSteps: Dispatch<SetStateAction<number>>) => () => {
    if (steps !== 1) setSteps(steps - 1)
}

const stepperComponents = (steps: number) => {
    switch (steps) {
        case 1:
            return <FirstStep />

        case 2:
            return <SecondStep />

        case 3:
            return <ThirdStep />

        default:
            return null
    }
}

// const onSuccess = () => {

// }

// const onError = () => {

// }

export const SignUp = () => {

    const [steps, setSteps] = useState<number>(1)

    const { handlePostData, data, error } = UsePost()

    const methods = useForm<FormData>({
        defaultValues: {
            email: '',
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            city: '',
            street: '',
            number: 0,
            zipcode: '',
            phone: ''
        }
    })

    const { handleSubmit } = methods

    const onSubmit = async (data: FormData) => {
        nextSteps(steps, setSteps)()
        if (steps === 3) await handlePostData(`${process.env.NEXT_PUBLIC_APP_SIGNUP_URL}/users`, data)
    }

    return (
        <Fragment>
            <FormProvider {...methods}>
                <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                    <Header appMenu={[]}>
                        <Box>
                            <ButtonPrimary sx={{ mr: 2 }} onClick={prevSteps(steps, setSteps)}>
                                Go Back
                            </ButtonPrimary>
                            <ButtonPrimary type="submit">
                                Continue
                            </ButtonPrimary>
                        </Box>
                    </Header>
                    <Box sx={{ mt: 16 }}>
                        <Container maxWidth='xl'>
                            <Grid container spacing={2}>
                                {stepperComponents(steps)}
                                {error && <Errors error={error} />}
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </FormProvider>
        </Fragment >
    )
}
