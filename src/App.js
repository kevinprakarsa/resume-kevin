import React from 'react';
import './App.css';
import Resume from './pages/Index';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Resume />
      </div>
    </ThemeProvider>
  );
}

export default App;
