import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { RouteGuard } from '@components/routeGuard'
import { Container, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'

const ActionItems: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal - contact</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <RouteGuard>
        <>
          <div className={styles.escapePanel}>
            <QuickLeaveButton />
          </div>
          <Container>
            <main>
              <PrivacyNavBar />
              <div className={styles.content}>
                <Stack gap={2}>
                  <Typography variant="h1">
                    Action Items
                  </Typography>
                  <Typography variant="body1">
                    Here are some steps you can take today to ensure your safety.
                  </Typography>
                  <Typography variant="h2">
                    Make sure you can trust your devices

                  </Typography>
                  <Typography variant="body1">
                    TODO:
                    <ul>
                      <li>
                        use passwords for all personal accounts and log out always when on a shared device
                      </li>
                      <li>
                        lookout for physical tampering
                      </li>
                      <li>
                        Browse the internet in an incognito window
                      </li>
                      <li>
                        in in doubt, go to the library
                      </li>
                    </ul>
                  </Typography>
                  <Typography variant="h2">
                    Backup your personal data
                  </Typography>
                  <Typography variant="body1">
                    TODO:
                    technology can be used to aid you and use it to give yourself a backup plan
                    <ul>
                      <li>
                        back up passport info, identity so if you need to escape, this cannot be withheld from you
                      </li>
                      <li>
                        back up  important info on a hidden usb. advanced: encrypt your usb too
                      </li>
                    </ul>
                  </Typography>
                  <Typography variant="h2">
                    Encrypt your communication channels
                  </Typography>
                  <Typography variant="body1">
                    TODO:
                    <ul>
                      <li>
                        use e2e encrypted chat like whatsapp or signal
                      </li>
                      <li>
                        stuff about separating online accounts
                      </li>
                    </ul>
                  </Typography>
                  <Typography variant="h2">
                    Gain Independence
                  </Typography>
                  <Typography variant="body1">
                    TODO:
                    <ul>
                      <li>
                        stuff about make own bank account
                      </li>
                      <li>
                        stuff about separating online accounts
                      </li>
                      <li>
                        pseudonyms on social media to prevent harassment, careful digital identity
                      </li>
                      <li>
                        new email, new phone etc.
                      </li>
                    </ul>
                  </Typography>
                </Stack>
              </div>
            </main>
          </Container>
        </>
      </RouteGuard>
    </>
  )
}

export default ActionItems;
