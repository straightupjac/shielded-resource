import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const Manifesto: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <QuickLeaveButton />
      <Container>
        <main>
          <PrivacyNavBar />
          <Typography variant="h1">
            Manifesto
          </Typography>
          <Typography variant="body1">
            Our vision is to build a tool that will educate individuals on how to maintain the privacy they need to access sensitive resources on the Internet while ensuring their privacy and safety. This tool empowers individuals who fear the consequences of being caught accessing this information to access sensitive resources and ensure that they can access the information without being monitored. Our target users would start with individuals accessing domestic violence or abortion information on the internet, but could extend to any individuals seeking access to sensitive information.
          </Typography>
        </main>
      </Container>
    </>
  )
}

export default Manifesto;
