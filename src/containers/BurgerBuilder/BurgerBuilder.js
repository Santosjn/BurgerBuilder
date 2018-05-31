import React, { Component } from 'react';

import CustomWrapper from '../../hoc/CustomWrapper/CustomWrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandling';
import axios from '../../axios-orders';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
      axios.get('/ingredients.json')
      .then(response => {
        // console.log(response, 'get /ingredients')
        this.setState({ingredients: response.data});
      })
      .catch(error => {this.setState({error: true})});
    }

    updatePurchaseState = (ingredients) => {
      const sum = Object.keys(ingredients)
      .map( igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el)=> {
        return sum + el;
      } ,0);

      this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;

      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;

      const priceAddition = INGREDIENTS_PRICES[type];

      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });

      this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {  
      const oldCount = this.state.ingredients[type];   
      if(oldCount <= 0) { return; }
      
      const updatedCount = oldCount - 1;      

      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;

      const priceDeduction = INGREDIENTS_PRICES[type];
     
      const newPrice = this.state.totalPrice - priceDeduction;

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });

      this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
      this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
      this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
      // alert("You continue!");
      this.setState({loading: true});

      const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
          name: "Jango",
          address: {
            street: "Street test, n 50",
            zipCode: "12999000",
            country: "Brasil"
          },
          email: "test1@email.com",
          deliveryMethod: 'motorcycle'
        }
      }

      axios.post('/orders.json', order)
      .then(response => {
        // console.log(response)
        this.setState({loading: false, purchasing: false});
      })
      .catch(error => {
        console.log(error)
        this.setState({loading: false, purchasing: false});
      });
    }

    render() {

      const disabledInfo = {
        ...this.state.ingredients
      }

      for(let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }
      // {salad: true, meat: false, ... }

      let orderSummary = null;
      let burger = this.state.error ? 
      <p style={{textAlign: 'center'}}>Ingredients can't be loaded!</p> : 
      <Spinner/>;

      if(this.state.ingredients) {
        burger =( 
          <CustomWrapper>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}/>
        </CustomWrapper>  
        );
        orderSummary = <OrderSummary 
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}/>;
      }  
      if(this.state.loading) {
        orderSummary = <Spinner />
      }            

      return(
        <CustomWrapper>
          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            {orderSummary}
          </Modal>
          {burger}
        </CustomWrapper>
      );
    }

}

export default withErrorHandler(BurgerBuilder, axios);