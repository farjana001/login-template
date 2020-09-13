import React from 'react';
import './App.css';
import SideMenu from './Components/SidebarMenu/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './Components/Header';
import Form from './Components/Form/Form';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#7986cb'
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081'
    },
    background: {
      default: '#E7EAED'
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '300px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <SideMenu />
    <div className={classes.appMain}>
      <Header />
      <Form />
    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
