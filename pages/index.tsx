import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fresh Meal</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>


      <div className={styles.header}>
          <a href="#default" className={styles.logo}><img src="logo.png" width={190} height={70}/></a>
          <div className={styles.header_right}>
            <div className={styles.search}>
              <input className={styles.search_bar} type="text" placeholder="Search.." name="search" />
              <button className={styles.search_button} type="submit"><img src="search.png" width={20} height={20}/></button>
            </div>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="#about">More Recipes</a>
          </div>
        </div>

        <main className={styles.main}>
          <span className={styles.left_col}>
            <img src="cookie.jpeg" width={500} height={300}/>
            <h1 className={styles.recipe_title}>Ultimate Chocolate Chip Cookies</h1>
            <div className={styles.reviews}>
              <img src="five-stars.png" width={100} height={20}/>
              <p className={styles.review_count}>(1278)</p>
            </div> 
          </span>
          <span className={styles.recipe}>
            <h2>Ingredients</h2>
              <ul className={styles.ingredient_list}>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>2 1/4 cups all-purpose flour</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>1 teaspoon baking soda</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>1/2 teaspoon salt</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>1 cup butter, softened</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>3/4 cup granulated sugar</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>3/4 cup packed brown sugar</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>1 egg</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>1 teaspoon vanilla</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>2 cups semisweet chocolate chips</p>
                </li>
                <li className={styles.ingredient_bullet}>
                  <img src="bullet-point.png" width={20} height={20}/>
                  <p className={styles.ingredient}>1 cup coarsely chopped nuts, if desired</p>
                </li>
              </ul>
              <h2>Steps</h2>
              <ol className={styles.steps_list}>
                <li className={styles.step}>Heat oven to 375°F. In small bowl, mix flour, baking soda and salt; set aside.</li>
                <li className={styles.step}>Beat in egg and vanilla until smooth. Stir in flour mixture just until blended (dough will be stiff).</li>
                <li className={styles.step}>Stir in chocolate chips and nuts.</li>
                <li className={styles.step}>Onto ungreased cookie sheets, drop dough by rounded tablespoonfuls 2 inches apart.</li>
                <li className={styles.step}>Bake 8 to 10 minutes or until light brown (centers will be soft).</li>
                <li className={styles.step}>Cool 2 minutes; remove from cookie sheet to cooling rack. Cool completely, about 30 minutes.</li>
              </ol>
          </span>
        </main>

      {/* <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a>FreshMeal</a>
        </h1>
         <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> 
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
