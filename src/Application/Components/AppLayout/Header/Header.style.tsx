import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderWrap = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.white.main,
    padding: theme.spacing(4, 0),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1030
}))

export const HeaderLinksWrap = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export const NavLink = styled(Box)(({ theme }) => ({
    color: theme.palette.black.medium,
    textDecoration: 'none',
    margin: theme.spacing(0, 5),
    fontSize: '20px'
}))