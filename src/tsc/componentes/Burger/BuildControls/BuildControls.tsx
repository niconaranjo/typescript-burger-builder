import React from 'react';

// Components
import BuildControl from './BuildControl/BuildControl';

import { ingredientsTypeStrings } from '../../../utils/types-and-interfaces';

interface ControlsInterface {
  label: string;
  IngredientType: ingredientsTypeStrings;
}

const controls: ControlsInterface[] = [
  { label: 'Salad', IngredientType: 'salad' },
  { label: 'Bacon', IngredientType: 'bacon' },
  { label: 'Cheese', IngredientType: 'cheese' },
  { label: 'Meat', IngredientType: 'meat' },
];

interface BuildControlsProps {
  ingredientAdded: (IngredientType: ingredientsTypeStrings) => void;
  ingredientRemoved: (type: ingredientsTypeStrings) => void;
  disabled: {
    [key in ingredientsTypeStrings]: number | boolean;
  };
  price: number;
  purchase: boolean;
  /*

  ordered: () => void; */
}

const BuildControls = (props: BuildControlsProps) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{props.price.toFixed(2)} </strong>
      </p>
      {controls.map((item) => (
        <BuildControl
          key={item.label}
          label={item.label}
          addIngredient={() => props.ingredientAdded(item.IngredientType)}
          removeIngredient={() => props.ingredientRemoved(item.IngredientType)}
          disabled={props.disabled[item.IngredientType] as boolean}
        />
      ))}
      <button className="OrderButton" type="button" disabled={props.purchase}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
