
import React from 'react';
import CustomWrapper from '../../hoc/CustomWrapper';

const layout = ( props ) => {

    return(
        <CustomWrapper>
          <div>Toobar, SideDrawer, Backdrop</div>
          <main>
            {props.children}
          </main>
        </CustomWrapper>        
    );

};

export default layout;