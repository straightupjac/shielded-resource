import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { RouteGuard } from '@components/routeGuard'
import { Container, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

// eslint-disable react/no-unescaped-entities
const Privacy: NextPage = () => {
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
            <Stack spacing={2}>
              <Typography variant="h1">
                Digital Privacy Resources
              </Typography>
              <Typography variant="h2">
                Why We Need Privacy Tools
              </Typography>
              <Typography variant="body1">
                There are many reasons why people might need privacy tools. Some people may need them to protect their online activity from being tracked, others may need them to communicate securely, and still others may need them to hide their location. Privacy tools can help people to stay safe online, and to keep their information private.
                <br /><br />
                Domestic violence victims and those seeking abortions in particular need privacy tools to protect their safety. Domestic abuse survivors often have to worry about their online safety as well as their physical safety. In both cases, the individuals may be seeking to escape a dangerous or abusive situation, and may need to keep their location and identity confidential in order to stay safe. Additionally, both groups may be subject to stigma and discrimination, and privacy tools can help them avoid judgement and maintain their dignity.
                One of the best ways to protect yourself online is to make sure your devices are secure. This means creating strong passwords, never sharing passwords with anyone, and being careful about what you post online.
              </Typography>
              <Typography variant="body1">
                Additionally, it is important to be aware of the signs that an abuser may be using technology to control or spy on you.
                Some of these signs include unusual text messages or calls, unexpected bills, and social media posts that seem out of character.
                If you suspect that your abuser is using technology to control or spy on you, there are steps you can take to protect yourself.
                You can change your passwords, block numbers and email addresses, and use security features on your devices.
                You can also reach out to a domestic abuse hotline for help and support.
              </Typography>
              <Typography variant="h3">
                Existing privacy-related solutions and what they do
              </Typography>
              <Typography variant="h4">
                For safe browsing
              </Typography>
              <Typography variant="body1">
                An easy privacy step that you can take right now is switch to <strong>incognito mode</strong> (for Chrome) or <strong>private browsing</strong> (for Safari).
                Incognito mode is a privacy setting that allows users to browse the web without creating a record of their activity. This is important for users who want to keep their browsing activity private, as it prevents their history from being tracked. However, there are limitations to the privacy that incognito mode can offer you:
                <ul>
                  <li>
                    It does not prevent your internet service provider from seeing your browsing activity, it does not prevent websites from seeing your IP address, and it does not prevent websites from using cookies to track your browsing activity.
                  </li>
                  <li>
                    <strong>It is not completely safe</strong> because your activity is still visible to websites you visit, your employer, school, ISP via your IP address.
                  </li>
                  <li>
                    <strong>It cannot hide tabs</strong>-  imagine you’re working on your computer on incognito mode and have to step away for a moment. You have 7-8 tabs open and someone calls you. You need to get up from your seat but you’ll need to close the tabs before that. This means you will lose track of anything you are currently working on.
                  </li>
                </ul>

                If you are in an unsafe digital environment (shared devices), we recommend you conduct searches on the device of someone you trust (best option), use Incognito mode in your browser, or clear your browsing history immediately after use.
              </Typography>
              <Typography variant="body1">
                Some other resources:
                <ul>
                  <li>
                    <a href="https://duckduckgo.com/"
                      target="_blank" rel="noreferrer">DuckDuckGo</a> – doesn’t track searches
                  </li>
                  <li>
                    <a href="https://brave.com/privacy-features/"
                      target="_blank" rel="noreferrer">Brave Browser</a> – a privacy first web browser
                  </li>
                  <li>
                    VPNs –  these offer the masking feature that is a limitation of incognito mode.
                    Some pros of using a VPN for privacy are that it can help to hide your identity online, and it can also make it more difficult for people to track your online activities. Some cons of using a VPN for privacy are that it can slow down your internet connection, and it can also be more expensive than other methods of online privacy protection.
                  </li>
                </ul>
              </Typography>
              <Typography variant="h4">
                For safe communication
              </Typography>
              <Typography variant="body1">
                When communicating with others about sensitive topics, we recommend you use secure messaging apps that have <strong>end-to-end encryption</strong> like <a href="https://signal.org" target="_blank" rel="noreferrer">Signal</a>. End to end message encryption is important because it helps to ensure that only the intended recipient of a message can read it. This type of encryption can help to protect the privacy of a message and can also help to prevent someone from tampering with the message.
                <br /> <br />
                There is no perfect solution available as there are a variety of end-to-end encryption methods and software programs available. However, some tips on how to message people with end-to-end encryption include choosing a reputable end-to-end encryption software program, ensuring that both you and the person you are messaging have the same program installed and configured correctly, and verifying the security of your communications by comparing cryptographic keys.
              </Typography>
              <Typography variant="h3">
                Ways That Someone Could Be Monitored
              </Typography>
              <Typography variant="h4">
                Physical Tampering
              </Typography>
              <Typography variant="body1">
                If someone had physical access to your device, they could install malware that would give them access to your data and invade your privacy. They could also access your {`device's`} camera and microphone to spy on you.
                <ul>
                  <li>
                    “Bugging” your phone requires physical access to the device, but it can be done in less than an hour. If you are able to, do not share passwords or devices with others.
                  </li>
                  <li>
                    The first step to ensuring online safety for domestic abuse survivors is protecting your devices. <strong>One of the biggest ways for an abuser to control their victims is through technology, starting with their phones.</strong> Abusers have been known to install tracking software on the phones and computers of their victims. Abusers have been known to install tracking software on the phones and computers of their victims by sending them a link to an app or website that will install the software without the {`victim's`} knowledge. The abuser can then use the software to track the {`victim's`} location, read their texts and emails, and listen to their phone calls.
                  </li>
                  <li>
                    In general, {`it’s`} much easier for someone to tamper with the hardware of a desktop computer than with a laptop. <strong>The external mouse and keyboard make it easy to attach a physical keylogger to your machine.</strong> To ascertain if a physical keylogger is connected to your computer, follow the cable of your keyboard to the point where it reaches your computer. If there’s a little device (similar to a USB stick) between your cable and the computer, the device might be a keylogger (or, less alarmingly, just an adapter).
                  </li>
                  <li>
                    The owner of these devices may have installed other tracking software that will collect information even if you use a VPN or Tor.
                  </li>
                </ul>
              </Typography>
              <Typography variant="h4">
                Digital Tracking
              </Typography>
              <Typography variant='body1'>
                There are a many ways that an abuser could track you digitally. They could use GPS to track your location, they could use a spy app to track your phone activity, or they could hack into your social media accounts to see what you are doing and who you are talking to.
                <br /> <br />
                There are some ways to check if you are being tracked digitally and reduce your digital trail.
                <ul>
                  <li>
                    An digital predator could look up your DNS records if {`you’re`} on a Windows computer or your mac DNS records.
                  </li>
                  <li>
                    They could see your targeted ads (this happens via cookies being placed on a website by a third party). These cookies are placed on the website, and often users. <strong>A prime example of this is the Facebook Pixel.</strong>Websites using a Facebook Pixel can track visitor activity on their site, then re-target those same users with ads when they visit Facebook. So if a Facebook Pixel is on a site that you visit, Facebook can add a third-party cookie to your browser and track your behavior in order to serve you with targeted ads the next time you log in to Facebook. And since Facebook maintains such an enormous advertiser network, these trackers can be found just about everywhere on the web.
                  </li>
                </ul>
                Some key things to look for when accessing sensitive information include:
                <ul>
                  <li>
                    whether the site or app requires a login
                  </li>
                  <li>
                    How the site or app stores information
                  </li>
                  <li>
                    What security measures are in place to protect information
                  </li>
                  <li>
                    Whether the site or app shares information with third parties
                  </li>
                </ul>
                Some of these things are easier to identify and investigate that others, but it is good to be mindful of how the websites you visit are tracking your information.
              </Typography>
              <Typography variant="h2">
                How we can facilitate privacy for vulnerable populations
              </Typography>
              <Typography variant="body1">
                Privacy tools can be used for good by allowing people to keep their personal information private and by giving people control over who has access to their information. Privacy tools can be used for bad by allowing people to hide their identity and to access information that they should not have access to.
                <br /> <br />
                <strong>Privacy should be considered as a multidimensional process</strong> that includes more stakeholders than the one we’re necessarily considering (in our case, the vulnerable populations that make up our user persona).
                <br /> <br />
                We should strive for <strong>sensible privacy</strong>, which “refers to the combination of privacy tradeoffs between privacy and usability and privacy and accountability.”
                <ul>
                  <li>
                    A terminology has been proposed to describe privacy in terms of data minimisation in the systems domain; that is minimizing the collection and processing of identifying information when using online services.
                  </li>
                  <li>
                    This leads to a feature recommendation that we do not ask the users ANY questions per se about themselves when they use our tool. There is no need to collect any information about them.
                  </li>
                </ul>
              </Typography>
              <Typography variant="h2">Closing Words</Typography>
              <Typography variant="body1">
                Protecting your internet privacy is important regardless of what information you are accessing. We recomend you set strong passwords and use a password manager to manage your password across various accounts. Password managers are important because they allow users to store and manage their passwords in a secure way. Password managers can also help users generate strong passwords and keep track of their passwords.
              </Typography>
              <Typography variant="body1">
                <strong>
                  Key Takeaways:
                </strong>
                <ul>
                  <li>
                    It is important to protect your digital privacy because it helps to prevent identity theft, safeguard your personal information, and maintain your online security.
                  </li>
                  <li>
                    Identity theft can occur when your personal information is accessed without your permission. This can happen through data breaches, phishing scams, or malware.
                  </li>
                  <li>
                    Safeguarding your personal information helps to prevent identity theft and maintain your online security. You can do this by using strong passwords, two-factor authentication, and encrypting your data.
                  </li>
                  <li>
                    Maintaining your online security is important to protect your digital privacy. You can do this by keeping your software up to date, using secure websites, and avoiding public Wi-Fi.
                  </li>
                </ul>
              </Typography>
            </Stack>
          </main>
        </Container>
      </RouteGuard>
    </>
  )
}

export default Privacy;
