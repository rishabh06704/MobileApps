import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from './galleryscreen';
import PictureViewer from './pictureviewing';

const Stack = createStackNavigator();

function GalleryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="PictureViewer" component={PictureViewer} />
    </Stack.Navigator>
  );
}

export default GalleryStack;