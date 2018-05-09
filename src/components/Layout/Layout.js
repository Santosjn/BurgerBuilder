
import React from 'react';
import CustomWrapper from '../../hoc/CustomWrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

const layout = ( props ) => {

    return(
        <CustomWrapper>
          <Toolbar />
          <SideDrawer />
          <main className={classes.Content}>
            {props.children}
          </main>
        </CustomWrapper>        
    );

};

export default layout;