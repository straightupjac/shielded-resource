import QuickLeaveButton from '@components/quickLeaveButton'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal - contact</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <Container>
        <main>
          <QuickLeaveButton />
          <Typography variant="h1">
            Privacy Resources
          </Typography>
          <Typography variant="body1">
            Email{' '}
            <code>contact@freshmeal.com</code> :)
          </Typography>
        </main>
      </Container>
    </>
  )
}

export default Privacy;
