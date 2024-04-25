//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, FlatList } from 'react-native';


const Bucketlist = () => {
  const [newItem, setNewItem] = useState('');
  const [bucketList, setBucketList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setBucketList([...bucketList, { id: Date.now().toString(), text: newItem, completed: false }]);
      setNewItem('');
    } else {
      setErrorMessage('Please enter a valid item.');
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
    <TouchableOpacity onPress={() => toggleItemCompletion(item.id)} style={styles.itemContainer}>
      <View>
        <Text style={[styles.itemText, item.completed && styles.completedItemText]}> 
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> My Bucket List</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Enter new item!"
          onChangeText= {setNewItem}
          value={newItem}
        />
        <Button title='Add' onPress={addItem} />
      </View>
      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <FlatList
        data={bucketList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fcf0',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
    color: '#333333'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#423e3e',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#a4c4a3',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#0a0a0a',
  },
  completedItemText: {
    textDecorationLine: 'line-through',
    color: '#0a0a0a',
  },
});

export default Bucketlist;







