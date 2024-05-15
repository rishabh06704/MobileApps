import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { Card } from 'react-native-paper';

const PictureViewer = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Card>
        <Card.Content>
          <Image source={{ uri: item.imageUri }} style={{ width: '100%', height: 300, resizeMode: 'cover' }} />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>{item.title}</Text>
          <Text style={{ fontSize: 18, marginTop: 8 }}>{item.content}</Text>
        </Card.Content>
        <Card.Actions>
          <Button title="Back" onPress={() => navigation.goBack()} />
        </Card.Actions>
      </Card>
    </View>
  );
};

export default PictureViewer;