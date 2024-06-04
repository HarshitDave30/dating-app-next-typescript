import { Fragment, ReactNode } from "react"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { APP_MENU_GROUP } from "../Constants/AppMenuConstants"

interface AppLayoutProps {
    appMenu: APP_MENU_GROUP[]
    children: ReactNode
}

export const AppLayout = ({ appMenu, children }: AppLayoutProps) => {
    return (
        <Fragment>
            <Header appMenu={appMenu} />
            {children}
            <Footer />
        </Fragment>
    )
}
