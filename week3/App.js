import React, {Component} from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";




export default class Flex extends Component {

  _onButtonPress = () => {
    console.log("Button is pressed!");
    Alert.alert('You have pressed the button!')
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View  style= {{flex:1, flexDirection:'column', alignItems: 'center'}}>
          <Text style={[styles.heading]}> Welcome to week 3</Text>
          <Button
            title="Press Me!"

          />
        </View>
        <View style={{flex:1, flexDirection: 'row', justifyContent: "space-between", backgroundColor: 'green'}}>
          <Button style={{flex:1}}
            title="Press Me Too!"
          />
          <Button style={{flex:2}}
            title="Press Me as well!"
          />
          <Button
            title="Press Me Four!"
          />
        </View>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30


  }

});