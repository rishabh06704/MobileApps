import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from './components/navigationbar.js';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
};

export default App;