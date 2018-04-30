import React, { Component } from 'react';

import CustomWrapper from '../../hoc/CustomWrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }


    render() {
      return(
        <CustomWrapper>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls />
        </CustomWrapper>
      );
    }

}

export default BurgerBuilder;