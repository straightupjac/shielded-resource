import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal - about</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <Container>
        <main>
          <Typography variant="h1">
            About <a>FreshMeal</a>
          </Typography>
          <p>
            We are here to help.
          </p>
        </main>
      </Container>
    </>
  )
}

export default About;
