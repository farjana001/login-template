import React from 'react';
import {  withStyles } from '@material-ui/core';



const style = {
  sideMenu: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left: '0',
      width: '300px',
      height: '100%',
      backgroundColor: '#253853'
  }
};
const SideMenu = (props) => {
    const {classes} = props;
    return (
        <div className={classes.sideMenu}>
            
        </div>
    );
};

export default withStyles(style)(SideMenu);