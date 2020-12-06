// Used on Build controls
export enum IngredientsName {
  salad,
  bacon,
  cheese,
  meat,
}

export interface BurgerBuilderState {
  ingredients: {
    [key in ingredientsTypeStrings]: number;
  };
  totalPrice: number;
  purchasable: boolean;
}

export type ingredientsTypeStrings = keyof typeof IngredientsName;
export type ingredientTypeObject = {
  [key in ingredientsTypeStrings]: number;
};
