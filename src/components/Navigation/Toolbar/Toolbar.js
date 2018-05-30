import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuIcon from '../SideDrawer/MenuIcon/MenuIcon'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>           
            <MenuIcon clicked={props.menuClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;

