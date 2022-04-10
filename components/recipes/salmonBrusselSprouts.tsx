import React from 'react'
import styles from '@styles/recipe.module.css'
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

function SalmonRecipe() {
  return (
    <div className={styles.recipeBox}>
      <span className={styles.left_col}>
        <Image alt="image of a salmon and brussel sprouts" src="/salmon.jpeg" width={500} height={300} />
        <h1 className={styles.recipe_title}>Sheet Pan Roasted Brussels Sprouts and Salmon</h1>
        <div className={styles.reviews}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <p className={styles.review_count}>(1384)</p>
        </div>
      </span>
      <span className={styles.recipe}>
        <h2>Ingredients</h2>
        <ul className={styles.ingredient_list}>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 lb. Brussels sprouts, trimmed and halved</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/2 lb. baby Yukon gold potatoes, halved</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/2 lb. wild caught salmon, cut into 4 fillets</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 cup olive oil</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/2 teaspoon garlic powder</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 teaspoon sea salt</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 teaspoon black pepper</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 lemon, quartered</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>2 cups semisweet chocolate chips</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 cup coarsely chopped nuts, if desired</p>
          </li>
        </ul>
        <h2>Steps</h2>
        Preheat oven to 400 degrees. In a large bowl, toss together Brussels sprouts, potatoes, salmon, olive oil, garlic powder, sea salt and black pepper. Transfer to a baking sheet lined with parchment paper. Bake for 20-25 minutes, until potatoes are tender and salmon is cooked through. Squeeze fresh lemon juice over before serving. Enjoy!
      </span>
    </div>
  )
}

export default SalmonRecipe;
