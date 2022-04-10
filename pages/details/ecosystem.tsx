import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { RouteGuard } from '@components/routeGuard'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Ecosystem: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal - contact</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <RouteGuard>
        <Container>
          <main>
            <PrivacyNavBar />
            <QuickLeaveButton />
            <Typography variant="h1">
              Ecosystem
            </Typography>
            <Typography variant="body1">
              Email{' '}
              <code>contact@freshmeal.com</code> :)
            </Typography>
          </main>
        </Container>
      </RouteGuard>
    </>
  )
}

export default Ecosystem;
