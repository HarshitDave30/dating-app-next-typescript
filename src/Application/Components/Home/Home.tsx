'use client'

import { Container, Divider, Grid, Stack, Typography } from "@mui/material"
import { BoxStyled, HomePageMainWrap, HomeTitle, MatchMakerLinks, QuoteWrapper } from "./Home.style"
import Image from "next/image"
import { QuoteIcon } from "../Molecules/icons/QuoteIcon"
import Link from "next/link"
import { SIGNUP_URL } from "../Constants/RouteConstants"
import { TwoHeartsIcon } from "../Molecules/icons/TwoHeartsIcon"
import { HeartMagnifier } from "../Molecules/icons/HeartMagnifier"
import { ElementType } from "react"
import { AppLayout } from "../AppLayout/AppLayout"
import { APP_MENU } from "../Constants/AppMenuConstants"

interface MatchMakerDetailsProps {
  title: string,
  width: number,
  height: number,
  icon: ElementType,
  variant: string,
}

const MatchMakerDetails: MatchMakerDetailsProps[] = [
  {
    title: 'Find A Match',
    width: 70,
    height: 48,
    icon: TwoHeartsIcon,
    variant: 'body1',
  },
  {
    title: 'Be A Matchmaker',
    width: 48,
    height: 48,
    icon: HeartMagnifier,
    variant: 'body1',
  },
]

export const Home = () => {
  return (
    <AppLayout appMenu={APP_MENU}>
      <HomePageMainWrap>
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={7}>
            <Grid item lg={6} sm={12}>
              <Image priority={true} width={716} height={755} src='/images/Hero_Image.png' alt="" />
            </Grid>
            <Grid item lg={6} sm={12}>
              <QuoteWrapper>
                <HomeTitle>
                  <Typography variant="h4" sx={{ color: 'blue.b700', marginBottom: 4 }}>
                    Common Threads Leading To Uncommon Connections
                  </Typography>
                </HomeTitle>
                <BoxStyled>
                  <QuoteIcon width={60} height={75} />
                  <Divider orientation="vertical" flexItem />
                  <Typography variant="h5">
                    Dating never felt this comfortable, I love it, my friends are excited to have
                    helped me, and I found someone I really connect with.
                  </Typography>
                </BoxStyled>
              </QuoteWrapper>
              <HomeTitle>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                  Get Started!
                </Typography>
                <Stack spacing={0} component={Link} href={SIGNUP_URL}>
                  {MatchMakerDetails.map((element) => {
                    const Icon = element.icon
                    return (
                      <MatchMakerLinks key={element.title}>
                        <Icon width={element.width} height={element.height} />
                        <Typography variant={element.variant}>{element.title}</Typography>
                      </MatchMakerLinks>
                    )
                  })}
                </Stack>
              </HomeTitle>
            </Grid>
          </Grid>
        </Container>
      </HomePageMainWrap>
    </AppLayout>
  )
}
