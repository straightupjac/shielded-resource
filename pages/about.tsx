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
            We are here to help. Freshmeal is a great place to find recipes for all occasions!
            <br /> <br />
            Whether {`you're`} looking for a quick and easy meal or something more elaborate, {`you'll`} find it here. There are also tips and tricks for making your cooking easier and more fun.
            {`Whether you're short on time or just don't feel like cooking a big meal, you'll find plenty of recipes here that can be made in a hurry. From simple snacks to full-blown dinners, we've got you covered. So take a look around and see what looks good to you - there's sure to be something that will hit the spot.`}
          </p>
          <Typography variant='body1'>
            Looking for quick recipes that you can make in a snap? Look no further than our recipe website! Our recipes are designed for busy people who want to enjoy delicious food without spending hours in the kitchen.
            <br /><br />
            {`Our recipes are quick and easy to follow, and we guarantee that you'll be able to make them in no time at all! We have recipes for all kinds of dishes, including breakfast, lunch, dinner, and even dessert!`}
            <br /><br />
            {`So what are you waiting for? Visit our website today and check out our quick recipes! You'll be glad you did!`}
          </Typography>
        </main>
      </Container>
    </>
  )
}

export default About;
