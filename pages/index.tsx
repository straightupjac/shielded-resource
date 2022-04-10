import ChocChipRecipe from '@components/recipes/chocolateChipCookies';
import Pizza from '@components/recipes/pizza';
import SalmonRecipe from '@components/recipes/salmonBrusselSprouts';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

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
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} textColor="primary">
              <Tab label="Ultimate Chocolate Chip Cookies" {...a11yProps(0)} />
              <Tab label="Sheet Pan Roasted Brussels Sprouts and Salmon" {...a11yProps(1)} />
              <Tab label="30-min Pizza" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ChocChipRecipe />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SalmonRecipe />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Pizza />
          </TabPanel>
        </main>
      </Container>
    </>
  )
}

export default Home
