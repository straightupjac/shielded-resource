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
            Our plan is to build a tool that would help individuals turn on the privacy controls features they need to access sensitive resources on the Internet while ensuring their privacy and safety. This tool would empower individuals who fear the consequences of being caught accessing this information to access sensitive resources and ensure that they can access the information without being monitored. Our target users would start with individuals accessing domestic violence or abortion information on the internet, but could extend to any individuals seeking access to sensitive information.
            <br />  <br />
            Essentially, this will be a Chrome Extension will be disguised as a regular application, that takes a “keyword” input that would turn on its privacy regulation features, which would allow the user to clear their trackers, browsing history, and access privacy features that are traditionally “hidden” or “hard to find” for users acting under stress. The goal is to enable the users to use this extension without seeming like they’re accessing sensitive information. We are going to try to mitigate the harmful design practices that surround privacy settings today (buried deep in Chrome settings, etc.) by building a simple and friendly (no dark design patterns) UI, inspired by the red button on the Choice Connect website. Finally, we would like to include an ethical {`"clause"`} with some degree of research on how we could mitigate the misuse of a tool like this one, as we believe that all solutions are vulnerable to misuse.
            <br />  <br />
            By considering the harm that our tool could cause beforehand to vulnerable groups (through discussion and research), we hope to catch and acknowledge any shortcomings in the {`"design"`} phase.
            <br />  <br />
            Our next steps would be to research information about the types of resources that users might access using our tool, to understand what we should do to safeguard their privacy. If possible, we would love to potentially speak to TJ from the SHORE Centre again, to further specify what they believe should be part of a tool like this.
          </Typography>
        </main>
      </Container>
    </>
  )
}

export default Manifesto;
