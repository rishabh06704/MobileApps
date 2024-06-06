// SenderScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const SenderScreen = ({ navigation }) => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle sending the message
  const handleSend = async () => {
    try {
      // http://localhost:8888/messenger/sendmessage.php
      //http://www.cs.drexel.edu/~rp946@drexel.edu/assignment4_info670/sendmessage.php
      const response = await fetch('http://www.cs.drexel.edu/~rp946@drexel.edu/assignment4_info670/sendmessage.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender, recipient, message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      // Clear the input fields after sending the message
      setSender('');
      setRecipient('');
      setMessage('');

      // Show a success message
      Alert.alert('Success', 'Message sent successfully');
    } catch (error) {
      console.error('Error:', error);
      // Handle the network error, show an error message to the user
      Alert.alert('Error', 'Failed to send the message. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Sender"
        value={sender}
        onChangeText={setSender}
      />
      <TextInput
        placeholder="Recipient"
        value={recipient}
        onChangeText={setRecipient}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={handleSend} />
      <Button title="Go to Receiver" onPress={() => navigation.navigate('Receiver')} />
    </View>
  );
};

export default SenderScreen;