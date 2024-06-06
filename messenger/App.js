// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SenderScreen from './components/senderscreen';
import ReceiverScreen from './components/receiverscreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sender" component={SenderScreen} />
        <Stack.Screen name="Receiver" component={ReceiverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;