import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {teal, amber } from '@material-ui/core/colors'
import SimpleAppBar from 'components/SimpleAppBar.js'


const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber
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
          <SimpleAppBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
