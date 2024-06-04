import { CONTACT_URL, LOGIN_URL, MISSION_URL, WHY_VALADATE } from "./RouteConstants"

interface APP_MENU_TYPES_PROPS {
    BUTTON: string,
    LINK: string,
    SUBMITBTN: string,
    ICON: string,
    PICTURE: string,
}

interface APP_MENU_ITEM {
    title: string,
    path: string,
    permission: any[],
    type: string,
    isLoading?: boolean
}

export interface APP_MENU_GROUP {
    group: APP_MENU_ITEM[]
}

export const APP_MENU_TYPES: APP_MENU_TYPES_PROPS = {
    BUTTON: 'BUTTON',
    LINK: "LINK",
    SUBMITBTN: "SUBMIT",
    ICON: "ICON",
    PICTURE: "PICTURE"
}

export const APP_MENU: APP_MENU_GROUP[] = [
    {
        group: [
            {
                title: 'Why Valadate?',
                path: WHY_VALADATE,
                permission: [],
                type: APP_MENU_TYPES.LINK,
            },
            {
                title: 'Our Mission',
                path: MISSION_URL,
                permission: [],
                type: APP_MENU_TYPES.LINK,
            },
            {
                title: 'Contact Us',
                path: CONTACT_URL,
                permission: [],
                type: APP_MENU_TYPES.LINK,
            },
        ]
    },
    {
        group: [
            {
                title: 'Log In',
                path: LOGIN_URL,
                permission: [],
                type: APP_MENU_TYPES.BUTTON,
                isLoading: false,
            },
        ],
    },
]