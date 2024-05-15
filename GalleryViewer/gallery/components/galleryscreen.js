import React from 'react';
import { ScrollView, } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const GalleryItem = ({ item, onPress }) => (
  <Card onPress={onPress}>
    <Card.Title title={item.title} subtitle={item.subtitle} left={LeftContent} />
    <Card.Content>
      <Text variant="bodyMedium">{item.content}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: item.imageUri }} />
  </Card>
);

const Gallery = ({ navigation }) => {
  const galleryData = [
    { id: '1', title: 'Image 1', subtitle: 'Subtitle 1', content: 'Content 1', imageUri: 'https://picsum.photos/id/11/700' },
    { id: '2', title: 'Image 2', subtitle: 'Subtitle 2', content: 'Content 2', imageUri: 'https://picsum.photos/id/16/700' },
    { id: '3', title: 'Image 3', subtitle: 'Subtitle 3', content: 'Content 3', imageUri: 'https://picsum.photos/id/18/700' },
    { id: '4', title: 'Image 4', subtitle: 'Subtitle 4', content: 'Content 4', imageUri: 'https://picsum.photos/id/19/700' },
  ];

  const handleItemPress = item => {
    navigation.navigate('PictureViewer', { item });
  };

  const renderItem = ({ item }) => (
    <GalleryItem item={item} onPress={() => handleItemPress(item)} />
  );

  return (
   <ScrollView contentContainerStyle={{ padding: 16 }}>
    {galleryData.map(item => (
      <GalleryItem key={item.id} item={item} onPress={() => handleItemPress(item)} />
    ))}
   </ScrollView>
  );
};

export default Gallery;