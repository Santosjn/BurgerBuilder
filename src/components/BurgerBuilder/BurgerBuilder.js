import React, { Component } from 'react';

import CustomWrapper from '../../hoc/CustomWrapper';

class BurgerBuilder extends Component {


    render() {
        return(
          <CustomWrapper>
                <div>Burger</div>
                <div>Build Controls</div>
          </CustomWrapper>
        );
    }

}

export default BurgerBuilder;