import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal, amber, red } from '@material-ui/core/colors'
import MenuSection from './containers/MenuSection'
import MapSection from './containers/MapSection.js';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: amber,
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: "#fff"
    },
    divider: 'rgba(255, 255, 255, 0.12)'
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div style={{flexGrow:1, height:'100%'}}>
       <ThemeProvider theme={theme}>
          <CssBaseline />           
          <MenuSection />
          {/* <MapSection /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
