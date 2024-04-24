import React, {useState} from "react";
import {StyleSheet, Button, View, ScrollView, Text, Image} from "react-native"
import PropTypes from "prop-types";


const Dog = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
  <ScrollView>
    <Text>Hello, I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
    </Text>
    <Button 
      onPress={() => {
        setIsHungry(false);
      }}
      disabled={!isHungry}
      title={isHungry ? 'Feed me, please!' : 'Thank You!'}
      />
  <Image
    source={{
      uri: 'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg'
    }}
    style={{width: 250, height:250}}
  />
   <Text>This is my picture.</Text>
  </ScrollView>
  );
  
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
};

const DogCafe = () => {
  return (
    <>
      <Dog name="Candy" />
    </>
  );
};

export default DogCafe;