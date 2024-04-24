import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, FlatList, ViewComponent } from 'react-native';

const Bucketlist = () => {
  const [newItem, setNewItem] = useState('');
  const [bucketList, setBucketList] = useState([]);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setBucketList([...bucketList, { id: Date.now().toString(), text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const toggleItemCompletion = (id) => {
    setBucketList(
      bucketList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleItemCompletion(item.id)}>
      <View>
        <Text> 
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{padding:20}}>
      <TextInput
        placeholder="Add new item!"
        onChangeText= {setNewItem}
        value={newItem}
      />
      <Button title='Add' onPress={addItem} />
      <FlatList
        data={bucketList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Bucketlist;







