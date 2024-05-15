import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileStack;