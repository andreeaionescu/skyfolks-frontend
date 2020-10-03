import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { indigo, amber } from '@material-ui/core/colors'
import SimpleAppBar from './components/SimpleAppBar.js'
import WorldMap from './components/WorldMap';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: indigo,
    secondary: amber,
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
          <SimpleAppBar />
          <WorldMap />
      </ThemeProvider>
    </div>
  );
}

export default App;
