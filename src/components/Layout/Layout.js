
import React from 'react';
import CustomWrapper from '../../hoc/CustomWrapper';

import classes from './Layout.css';

const layout = ( props ) => {

    return(
        <CustomWrapper>
          <div>Toobar, SideDrawer, Backdrop</div>
          <main className={classes.Content}>
            {props.children}
          </main>
        </CustomWrapper>        
    );

};

export default layout;