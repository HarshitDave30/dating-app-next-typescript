import { Box, Container } from '@mui/material'
import { HeaderLinksWrap, HeaderWrap, NavLink } from './Header.style'
import { LogoIcon } from '../../Molecules/icons/LogoIcon'
import Link from 'next/link'
import { ButtonPrimary } from '../../Molecules/Buttons/ButtonPrimary'
import { ReactNode } from 'react'
import { APP_MENU_GROUP } from '../../Constants/AppMenuConstants'

interface HeaderProps {
    appMenu: APP_MENU_GROUP[];
    children: ReactNode;
}

export const Header = ({ appMenu = [], children }: HeaderProps) => {
    return (
        <HeaderWrap>
            <Container maxWidth="xl">
                <HeaderLinksWrap>
                    <Box>
                        <Link href="/">
                            <LogoIcon width={213} height={40} />
                        </Link>
                    </Box>
                    {appMenu.length > 0 &&
                        appMenu.map((element, index) =>
                            element.group.length > 0 ? (
                                <Box key={index}>
                                    {element.group.map((_element, _index) =>
                                        _element.type === 'LINK' ? (
                                            <NavLink key={_index} component={Link} href={_element.path}>
                                                {_element.title}
                                            </NavLink>
                                        ) : (
                                            <ButtonPrimary key={_index}>Log In</ButtonPrimary>
                                        )
                                    )}
                                </Box>
                            ) : null
                        )}
                    {children}
                </HeaderLinksWrap>
            </Container>
        </HeaderWrap>
    )
}
