import Recipe from '@components/recipe'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.svg" />
      </Head>
      <Container>
        <main>
          <Typography variant='h1' style={{ marginBottom: 8 }}>
            Recipes for everyday
          </Typography>
          <Recipe />
        </main>
      </Container>
    </>
  )
}

export default Home
