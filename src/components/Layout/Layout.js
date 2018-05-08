
import React from 'react';
import CustomWrapper from '../../hoc/CustomWrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';

const layout = ( props ) => {

    return(
        <CustomWrapper>
          <Toolbar />
          <main className={classes.Content}>
            {props.children}
          </main>
        </CustomWrapper>        
    );

};

export default layout;