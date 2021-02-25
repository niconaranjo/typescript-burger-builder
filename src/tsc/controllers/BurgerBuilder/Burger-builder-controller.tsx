/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';

import Burger from '../../componentes/Burger/Burger';
import BuildControls from '../../componentes/Burger/BuildControls/BuildControls';
import OrderSummary from '../../componentes/Burger/OrderSummary/OrderSummary';
import Modal from '../../componentes/UI/Modal/Modal';
import Spinner from '../../componentes/UI/Spinner/Spinner';
import withErrorHandlerHOC from '../../hoc/withErrorHandler/withErrorHandler';

import firebaseDB from '../../firebaseContext';

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
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    firebaseDB
      .ref('/ingredients')
      .once('value')
      .then((response) => {
        const ingredients: ingredientTypeObject = response.val();

        this.setState({ ingredients });
      });
  }

  addIngredientsHandler = (type: ingredientsTypeStrings) => {
    if (!this.state.ingredients) return;

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
    if (!this.state.ingredients) return;

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
    // console.log('purchased');
    this.setState({
      loading: true,
    });
    console.log(this.state.loading);

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Nicolas Nara',
        address: 'test address',
        zipcode: '123412',
        city: 'Bogota',
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };

    console.log(firebaseDB);

    firebaseDB
      .ref()
      .child('/orders')
      .push(order)
      .then(() =>
        this.setState({
          loading: false,
          purchasing: false,
        })
      )
      .catch((error) =>
        this.setState({
          loading: false,
          purchasing: false,
        })
      );

    console.log(this.state.loading);
  };

  render() {
    if (!this.state.ingredients) return <Spinner isActive />;

    const disabledInfo: {
      [key in ingredientsTypeStrings]: number | boolean;
    } = {
      ...this.state.ingredients,
    };

    for (const key in disabledInfo) {
      const key2 = key as ingredientsTypeStrings;

      disabledInfo[key2] = disabledInfo[key2] <= 0;
    }

    let orderSummary = <p></p>;

    if (this.state.loading) {
      orderSummary = <Spinner isActive={this.state.loading} />;
    }

    let burger = <Spinner isActive />;

    if (this.state.ingredients) {
      burger = (
        <>
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
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          cancelPurchase={this.cancelPurchase}
          proceedPurchase={this.sendPurchase}
        />
      );
    }

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchase}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandlerHOC(BurgerBuilder, firebaseDB);
