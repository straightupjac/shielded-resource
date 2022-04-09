import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal - contact</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <Container>
        <main>
          <Typography variant="h1">
            More Recipes at <a>FreshMeal</a>
          </Typography>
          <p>
            Subnit more recipes{' '}
            <code>recipes@freshmeal.com</code> :)
          </p>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Red Velvet Cake</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ingredients
                <ul>
                  <li>
                    1 cup (2 sticks) unsalted butter, at room temperature
                  </li>
                  <li>
                    2 1/2 cups granulated sugar, divided
                  </li>
                  <li>
                    4 large eggs, at room temperature
                  </li>
                  <li>
                    1 ounce red food coloring
                  </li>
                  <li>
                    1 teaspoon pure vanilla extract
                  </li>
                  <li>
                    2 1/2 cups self-rising flour
                  </li>
                  <li>
                    1 cup buttermilk, at room temperature
                  </li>
                  <li>
                    1 teaspoon baking soda
                  </li>
                  <li>
                    1 tablespoon distilled white vinegar
                  </li>
                </ul>
              </Typography>
              <Typography>
                Instructions
                <ol>
                  <li>
                    Preheat oven to 350 degrees F (175 degrees C). Grease and flour two 9x1-inch baking pans.
                  </li>
                  <li>
                    Cream butter and 2 cups granulated sugar in the bowl of an electric mixer until light and fluffy, about 5 minutes. With mixer on medium speed, add eggs, one at a time, and beat until well blended. Add red food coloring and vanilla extract; beat until combined.
                  </li>
                  <li>
                    Sift self-rising flour into a bowl. Add flour and buttermilk to butter mixture alternately, beginning and ending with flour. Beat until well blended.
                  </li>
                  <li>
                    Dissolve baking soda in vinegar. Add to batter; mix until just blended. Divide batter evenly between pans.
                  </li>
                  <li>
                    Bake until a cake tester inserted into the center of each cake comes out clean, about 30 minutes. Cool in pans on wire racks for 10 minutes. Remove from pans; cool completely on wire racks.
                  </li>
                  <li>
                    To make the frosting: Combine 1/2 cup granulated sugar, egg whites, and cream of tartar in the bowl of an electric mixer. Set bowl over a pan of simmering water; whisk constantly until sugar is dissolved and mixture is warm to the touch, about 3 minutes.
                  </li>
                  <li>
                    Transfer bowl to electric mixer fitted with the whisk attachment. Beat on high speed until stiff peaks form, about 7 minutes. Add vanilla extract; beat just until combined.
                  </li>
                  <li>
                    Spread frosting between layers and on top and sides of cake.
                  </li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Sheet Pan Roasted Brussels Sprouts and Salmon
                <ul>
                  <li>
                    1 lb. Brussels sprouts, trimmed and halved
                  </li>
                  <li>
                    1/2 lb. baby Yukon gold potatoes, halved
                  </li>
                  <li>
                    1/2 lb. wild caught salmon, cut into 4 fillets
                  </li>
                  <li>
                    1/4 cup olive oil
                  </li>
                  <li>
                    1/2 teaspoon garlic powder
                  </li>
                  <li>
                    1/4 teaspoon sea salt
                  </li>
                  <li>
                    1/4 teaspoon black pepper
                  </li>
                  <li>
                    1 lemon, quartered
                  </li>
                </ul>
                Preheat oven to 400 degrees. In a large bowl, toss together Brussels sprouts, potatoes, salmon, olive oil, garlic powder, sea salt and black pepper. Transfer to a baking sheet lined with parchment paper. Bake for 20-25 minutes, until potatoes are tender and salmon is cooked through. Squeeze fresh lemon juice over before serving. Enjoy!
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Fajitas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>30-min Pizza</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Best Chocolate Cake Recipe</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> Sriracha Garlic Pork</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>One-Pot Chili Mac and Cheese</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Easy Skillet Chicken and Rice</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Quick Chicken Teriyaki Stir-Fry</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </main>
      </Container>
    </>
  )
}

export default Contact
