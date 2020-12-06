import React from 'react';

import {
  ingredientTypeObject,
  ingredientsTypeStrings,
} from '../../../utils/types-and-interfaces';

interface OrderSumaryProps {
  ingredients: ingredientTypeObject;
}

const OrderSummary = (props: OrderSumaryProps) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    const igKey2 = igKey as ingredientsTypeStrings;
    return (
      <li key={igKey2}>
        <span style={{ textTransform: 'capitalize' }}>{igKey2}</span>:{' '}
        {props.ingredients[igKey2]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
    </>
  );
};

export default OrderSummary;
