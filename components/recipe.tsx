import React from 'react'
import styles from '@styles/recipe.module.css'
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image'

type RecipeProps = {

}

function Recipe() {
  return (
    <div className={styles.recipeBox}>
      <span className={styles.left_col}>
        <Image alt="image of a cookie" src="/cookie.jpeg" width={500} height={300} />
        <h1 className={styles.recipe_title}>Ultimate Chocolate Chip Cookies</h1>
        <div className={styles.reviews}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <p className={styles.review_count}>(1278)</p>
        </div>
      </span>
      <span className={styles.recipe}>
        <h2>Ingredients</h2>
        <ul className={styles.ingredient_list}>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>2 1/4 cups all-purpose flour</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 teaspoon baking soda</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/2 teaspoon salt</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 cup butter, softened</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>3/4 cup granulated sugar</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>3/4 cup packed brown sugar</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 egg</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 teaspoon vanilla</p>
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
        <ol className={styles.steps_list}>
          <li className={styles.step}>Heat oven to 375°F. In small bowl, mix flour, baking soda and salt; set aside.</li>
          <li className={styles.step}>Beat in egg and vanilla until smooth. Stir in flour mixture just until blended (dough will be stiff).</li>
          <li className={styles.step}>Stir in chocolate chips and nuts.</li>
          <li className={styles.step}>Onto ungreased cookie sheets, drop dough by rounded tablespoonfuls 2 inches apart.</li>
          <li className={styles.step}>Bake 8 to 10 minutes or until light brown (centers will be soft).</li>
          <li className={styles.step}>Cool 2 minutes; remove from cookie sheet to cooling rack. Cool completely, about 30 minutes.</li>
        </ol>
      </span>
    </div>
  )
}

export default Recipe;
