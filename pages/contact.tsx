import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal - contact</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <Container>
        <main>
          <Typography variant="h1">
            Contact <a>FreshMeal</a>
          </Typography>
          <p>
            Email{' '}
            <code>contact@freshmeal.com</code> :)
          </p>
        </main>
      </Container>
    </>
  )
}

export default Contact
