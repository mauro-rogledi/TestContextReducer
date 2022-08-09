import React from 'react';
import {ChangeColor} from './ChangeColor';
import {ThemeProvider} from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <ChangeColor />
    </ThemeProvider>
  );
};

export default App;
