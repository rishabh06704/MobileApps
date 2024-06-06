// ReceiverScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const ReceiverScreen = ({ navigation }) => {
  const [recipient, setRecipient] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to handle retrieving messages
  const handleRetrieve = () => {
    // Make an HTTP GET request to the retrieveMessages API
    // http://localhost:8888/messenger/retrievemessage.php
    //http://www.cs.drexel.edu/~rp946@drexel.edu/assignment4_info670/retrievemessage.php
    fetch(`http://www.cs.drexel.edu/~rp946@drexel.edu/assignment4_info670/retrievemessage.php?recipient=${recipient}`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Render each message item in the FlatList
  const renderMessageItem = ({ item }) => (
    <View>
      <Text>From: {item.sender}</Text>
      <Text>Message: {item.message}</Text>
    </View>
  );

  return (
    <View>
      <TextInput
        placeholder="Recipient"
        value={recipient}
        onChangeText={setRecipient}
      />
      <Button title="Retrieve" onPress={handleRetrieve} />
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ReceiverScreen;