/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';

import Burger from '../../componentes/Burger/Burger';
import BuildControls from '../../componentes/Burger/BuildControls/BuildControls';
import OrderSummary from '../../componentes/Burger/OrderSummary/OrderSummary';
import Modal from '../../componentes/UI/Modal/Modal';

import {
  ingredientsTypeStrings,
  BurgerBuilderState,
  ingredientTypeObject,
} from '../../utils/types-and-interfaces';

const INGREDIENT_PRICES: ingredientTypeObject = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state: BurgerBuilderState = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  addIngredientsHandler = (type: ingredientsTypeStrings) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    updatedIngredients[type] = updatedCount;

    this.setState(() => ({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    }));

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type: ingredientsTypeStrings) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    updatedIngredients[type] = updatedCount;

    this.setState(() => ({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    }));

    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState = (ingredients: ingredientTypeObject) => {
    const sumValue = Object.keys(ingredients).reduce((sum, elem) => {
      const elem2 = elem as ingredientsTypeStrings;
      return sum + ingredients[elem2];
    }, 0);

    this.setState(() => ({
      purchasable: sumValue > 0,
    }));
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchase = () => {
    this.setState({ purchasing: false });
  };

  sendPurchase = () => {
    console.log('purchased');
  };

  render() {
    const disabledInfo: {
      [key in ingredientsTypeStrings]: number | boolean;
    } = {
      ...this.state.ingredients,
    };

    for (const key in disabledInfo) {
      const key2 = key as ingredientsTypeStrings;

      disabledInfo[key2] = disabledInfo[key2] <= 0;
    }

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchase}>
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            cancelPurchase={this.cancelPurchase}
            proceedPurchase={this.sendPurchase}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientsHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchase={!this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
