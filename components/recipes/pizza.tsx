import React from 'react'
import styles from '@styles/recipe.module.css'
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

function Pizza() {
  return (
    <div className={styles.recipeBox}>
      <span className={styles.left_col}>
        <Image alt="image of a cookie" src="/pizza.jpeg" width={500} height={300} />
        <h1 className={styles.recipe_title}>30-min Pizza</h1>
        <div className={styles.reviews}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <p className={styles.review_count}>(892)</p>
        </div>
      </span>
      <span className={styles.recipe}>
        <h2>Ingredients</h2>
        <ul className={styles.ingredient_list}>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 pound pizza dough</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/2 cup pizza sauce</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1 cup shredded mozzarella cheese</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 cup grated Parmesan cheese</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/2 teaspoon dried oregano</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 teaspoon garlic powder</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 teaspoon salt</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 teaspoon black pepper</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/2 cup sliced pepperoni</p>
          </li>
          <li className={styles.ingredient_bullet}>
            <Image alt="a bulllet point" src="/bullet-point.png" width={20} height={20} />
            <p className={styles.ingredient}>1/4 cup chopped fresh parsley</p>
          </li>
        </ul>
        <h2>Steps</h2>
        <ol className={styles.steps_list}>
          <li className={styles.step}>Preheat oven to 425 degrees F (220 degrees C)..</li>
          <li className={styles.step}>On a lightly floured surface, roll pizza dough into a 12-inch circle. Transfer to a greased pizza pan or baking sheet.</li>
          <li className={styles.step}>Spread pizza sauce over dough. Sprinkle with mozzarella cheese, Parmesan cheese, oregano, garlic powder, salt, and pepper. Arrange pepperoni over cheese.</li>
          <li className={styles.step}>Bake for 15 to 20 minutes, or until crust is golden brown and cheese is melted. Sprinkle with parsley before serving.</li>
        </ol>
      </span>
    </div>
  )
}

export default Pizza;
