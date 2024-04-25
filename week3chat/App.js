import React, {useState} from 'react';
import { DefaultTheme, PaperProvider, MD3LightTheme as defaultTheme } from 'react-native-paper';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper'


const theme = {
  ...DefaultTheme,
  Colors: {
    ...defaultTheme.colors
  }
}


export default function App() {
  return (
    <PaperProvider theme = {theme}>
    <View style={styles.container}>
      <MessageList/>
    </View>
    </PaperProvider>
  );
}

const MessageList = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState(['Roger!', 'Roger back!']);

  return (
    <ScrollView style={[styles.shadow, 
    {flex:1, flexDirection: 'column'}]}>
      <Message text="First Message." />
      <Message text="Second Message." />
      {texts.map( (text, index) => (<Message key={index} text={text} />) )}
      <View>
        <TextInput 
          placeholder="Enter Your Message here" 
          defaultValue={text}
          onChangeText={ newText => setText(newText)} 
          />
        <Button title="Send" icon ='send' raised
          onPress={() => {
            setTexts([...texts, text])

          }}
        />  
      </View>
    </ScrollView>

  );
}

const Message = props => {
  return (
    <View style={[styles.messageContainer]}>
      <Image 
      source={{
        uri: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg",
      }} 
      style={{width:20, height:20}}
      />
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  messageContainer: {
    flex: 1,
    flexdirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'Center',
    justifyContent: 'center',

  },
  shadow: {
    shadowColor: "grey",
    zindex: 9999,
  }
});
