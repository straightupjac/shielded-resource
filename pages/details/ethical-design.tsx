import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { RouteGuard } from '@components/routeGuard'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const EthicalDesign: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <RouteGuard>
        <Container>
          <main>
            <PrivacyNavBar />
            <QuickLeaveButton />
            <Typography variant="h1">
              Ethical Design
            </Typography>
            <Typography variant="body1">
              Our goal is to make sure that this tool enables user autonomy, transparency, and safety. We want our tool to feel like it was built 100% for a diverse set of users.
              Our goal should be to enable the user to make sure that:
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Don’t want it to show up in their history.
                </li>
                <li>
                  Don’t want to have this show up on their Facebook ads.
                </li>
                <li>
                  Don’t want to get targeted ads.
                </li>
                <li>
                  Don’t want to get any emails.
                </li>
                <li>
                  Don’t want to be on the wrong network.
                </li>
              </ul>
            </Typography>
            <Typography variant="body1">
              We enforce <strong>TRANSPARENCY</strong> by clearly explaining how turning off these settings will increase their privacy. <i>For example, how does turning off a setting make sure they won’t end up with targeted ads?</i>
              <ul>
                <li>Their number one priority is, is someone going to know (employers, parents, targeted ads based on location, people start to know that if I’d looked this up on my network, is somebody going to know that I’ve accessed it?)</li>
              </ul>
            </Typography>
            <Typography variant="body1">
              We will focus on a simple UX that doesn’t have too many features offered at once. It should clearly show them what to turn off (and potentially why, but less needed.)
              <ul>
                <li>They will prioritize <strong>speed</strong> and <strong>an easy to use interface</strong> because they are under pressure.</li>
                <li>We will <strong>EVALUATE our tool by checking for any dark design patterns</strong> we may be including in the UI.</li>
              </ul>
            </Typography>
          </main>
        </Container>
      </RouteGuard>
    </>
  )
}

export default EthicalDesign;
