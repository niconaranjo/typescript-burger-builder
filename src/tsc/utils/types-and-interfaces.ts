// Used on Build controls
export enum IngredientsName {
  salad,
  bacon,
  cheese,
  meat,
}

export interface BurgerBuilderState {
  ingredients: ingredientTypeObject | null;
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
  loading: boolean;
}
export interface AuxProps {
  children: React.ReactElement | React.ReactElement[];
}

export type ingredientsTypeStrings = keyof typeof IngredientsName;
export type ingredientTypeObject = {
  [key in ingredientsTypeStrings]: number;
};
