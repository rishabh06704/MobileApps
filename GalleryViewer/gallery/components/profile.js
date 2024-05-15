import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, RadioButton, Checkbox, Button, List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');
  const [isStudent, setIsStudent] = useState(false);
  const [country, setCountry] = useState('');

  useEffect(() => {
    // Load user data from AsyncStorage when the component mounts
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const { firstName, lastName, gender, isStudent, country } = JSON.parse(userData);
        setFirstName(firstName);
        setLastName(lastName);
        setGender(gender);
        setIsStudent(isStudent);
        setCountry(country);
      }
    } catch (error) {
      console.log('Error loading user data:', error);
    }
  };

  const saveUserData = async () => {

    if (firstName.trim() === '' || lastName.trim() === '') {
      Alert.alert('Error', 'Please enter both first name and last name.');
      return;
    }


    try {
      const userData = {
        firstName,
        lastName,
        gender,
        isStudent,
        country,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('User data saved successfully');
    } catch (error) {
      console.log('Error saving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <RadioButton.Group
        onValueChange={setGender}
        value={gender}
      >
        <View style={styles.radioContainer}>
          <RadioButton.Item label="Male" value="male" />
          <RadioButton.Item label="Female" value="female" />
        </View>
      </RadioButton.Group>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isStudent ? 'checked' : 'unchecked'}
          onPress={() => setIsStudent(!isStudent)}
        />
        <List.Item title="Student" />
      </View>
      <List.Section title="Country">
        <List.Accordion
          title={country || 'Select Country'}
          expanded={!!country}
          onPress={() => setCountry(country ? '' : 'USA')}
        >
          <List.Item title="USA" onPress={() => setCountry('USA')} />
          <List.Item title="Canada" onPress={() => setCountry('Canada')} />
          <List.Item title="UK" onPress={() => setCountry('UK')} />
        </List.Accordion>
      </List.Section>
      <Button mode="contained" onPress={saveUserData} style={styles.button}>
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default Profile;