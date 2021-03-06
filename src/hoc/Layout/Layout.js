
import React, {Component} from 'react';
import CustomWrapper from '../CustomWrapper/CustomWrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerOpenedHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return(
      <CustomWrapper>
          <Toolbar menuClicked={this.sideDrawerOpenedHandler}/>
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </CustomWrapper>   
    );
  }

} 

export default Layout;