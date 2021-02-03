import React from 'react';

import BurgerIngredient from './BurgerIngridient/BurgerIngridient';

enum IngredientsName {
  salad,
  bacon,
  cheese,
  meat,
}

type ingredientsStrings = keyof typeof IngredientsName;

interface BurgerProps {
  ingredients: {
    [key in ingredientsStrings]: number;
  };
}

const burger = (props: BurgerProps) => {
  let transformedIngredients: JSX.Element | JSX.Element[] = Object.keys(
    props.ingredients
  )
    .map((ingKey: string) => {
      const ingKey2 = ingKey as ingredientsStrings;
      return [...Array(props.ingredients[ingKey2])].map((_, index) => (
        <BurgerIngredient key={ingKey + index} type={ingKey} />
      ));
    })
    .reduce((current, element) => current.concat(element), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
