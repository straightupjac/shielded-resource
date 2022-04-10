import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { RouteGuard } from '@components/routeGuard'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'

const Manifesto: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal</title>
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
                <Typography variant="h1">
                  Manifesto
                </Typography>
                <Typography variant="body1">
                  Our vision is to build a tool that will educate individuals on how to maintain the privacy they need to access sensitive resources on the Internet while ensuring their privacy and safety. This tool empowers individuals who fear the consequences of being caught accessing this information to access sensitive resources and ensure that they can access the information without being monitored.
                  Our target users are individuals accessing domestic violence or abortion information on the internet, but could extend to any individuals seeking access to sensitive information.
                </Typography>
                <br />
                <Typography variant="body1">
                  We believe the right to abortion is a fundamental human right. This right is essential to ensuring that women are able to control their own bodies and make their own decisions about their health, wellbeing, and futures. Abortion is a safe and legal medical procedure that has been performed for centuries. It is one of the most common medical procedures performed in the United States, with more than 1.2 million abortions performed each year.
                  To support this, it is important that <strong>abortion seekers are able to access information about abortion in private.</strong> For some women, this means being able to maintain digital privacy so that their partner or families are not able to infringe on their privacy while they navigate a sensitive situation.
                  Abortion is a vital part of women’s healthcare. It is a safe and effective way to end a pregnancy, and it is a woman’s right to make her own decision about whether or not to have an abortion. We support this by empowering abortion seekers the tools to seek out information about abortion while maintaining their digital privacy so that they may make the best decision possible for their individual circumstance.
                </Typography>
                <br />
                <Typography variant="body1">
                  For domestic violence victims, there are a number of domestic abuse resources available to help domestic violence victims protect their privacy and safety. The <a href="https://www.canada.ca/en/public-health/services/health-promotion/stop-family-violence/services.html" target="_blank" rel="noreferrer">Canadian Family Violence Info Page</a> offers a number of resources on their website, including a tech safety planning toolkit. The toolkit includes a number of resources to help victims assess their digital privacy risks, develop a safety plan, and find resources and support.
                  <br /> <br />
                  The website in particular offers a number of resources specifically for victims to protect themselves digitally. These resources include a tech safety self-assessment, information on how to protect your privacy online, and a list of tech safety tips. Additionally, the website provides a list of national and local resources that can help victims of digital abuse.
                  <br /> <br />
                  If you are a victim of abuse, it is important to remember that you are not alone. There are a number of resources available to help you stay safe and protect your privacy. If you are in immediate danger, call 911.
                </Typography>
                <br />
                <Typography>
                  For anyone else using this tool, we believe digital privacy is necessary. There are a lot of sensitive topics surrounding sexuality, and many people feel uncomfortable discussing them in public. For this reason, digital privacy is necessary when navigating sexuality. This way, people can access information and resources without feeling embarrassed or exposed. There are many resources available online that can help people with their sexuality, but not all of them are created equal. Some websites and apps are better than others at protecting {`users'`} privacy. When choosing a resource, it is important to consider how it handles sensitive information.
                </Typography>
              </div>
            </main>
          </Container>
        </>
      </RouteGuard>
    </>
  )
}

export default Manifesto;
