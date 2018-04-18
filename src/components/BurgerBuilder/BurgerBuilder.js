import React, { Component } from 'react';

import CustomWrapper from '../../hoc/CustomWrapper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {


    render() {
        return(
          <CustomWrapper>
                <Burger />
                <div>Build Controls</div>
          </CustomWrapper>
        );
    }

}

export default BurgerBuilder;